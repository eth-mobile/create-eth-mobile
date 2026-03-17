import type { Args, SolidityFramework, RawOptions, SolidityFrameworkChoices } from "../types";
import arg from "arg";
import chalk from "chalk";
import { SOLIDITY_FRAMEWORKS } from "./consts";
import { validateNpmName } from "./validate-name";

export function parseArgumentsIntoOptions(rawArgs: Args): {
  rawOptions: RawOptions;
  solidityFrameworkChoices: SolidityFrameworkChoices;
} {
  const args = arg(
    {
      "--skip-install": Boolean,
      "--skip": "--skip-install",

      "--dev": Boolean,

      "--solidity-framework": solidityFrameworkHandler,
      "-s": "--solidity-framework",

      "--help": Boolean,
      "-h": "--help",
    },
    {
      argv: rawArgs.slice(2),
    },
  );

  const skipInstall = args["--skip-install"] ?? null;
  const dev = args["--dev"] ?? false;
  const help = args["--help"] ?? false;

  let project: string | null = args._[0] ?? null;

  if (project) {
    const validation = validateNpmName(project);
    if (!validation.valid) {
      console.error(
        `Could not create a project called ${chalk.yellow(`"${project}"`)} because of naming restrictions:`,
      );
      validation.problems.forEach(p => console.error(`${chalk.red(">>")} Project ${p}`));
      project = null;
    }
  }

  const solidityFrameworkChoices = [
    SOLIDITY_FRAMEWORKS.HARDHAT,
    SOLIDITY_FRAMEWORKS.FOUNDRY,
    { value: null, name: "none" },
  ];

  const solidityFramework =
    solidityFrameworkChoices.length === 1
      ? solidityFrameworkChoices[0]
      : ((args["--solidity-framework"] as SolidityFramework | null) ?? null);

  return {
    rawOptions: {
      project,
      install: !skipInstall,
      dev,
      help,
      solidityFramework: solidityFramework as RawOptions["solidityFramework"],
    },
    solidityFrameworkChoices,
  };
}

const SOLIDITY_FRAMEWORK_OPTIONS = [...Object.values(SOLIDITY_FRAMEWORKS)] as string[];

function solidityFrameworkHandler(value: string) {
  const lowercasedValue = value.toLowerCase();
  if (SOLIDITY_FRAMEWORK_OPTIONS.includes(lowercasedValue)) {
    return lowercasedValue as SolidityFramework;
  }
  return null;
}
