import { execa } from "execa";
import type { Options } from "../types";
import { SOLIDITY_FRAMEWORKS } from "../utils/consts";
import fs from "fs";
import path from "path";

const ETH_MOBILE_REPO = "https://github.com/dewdrip/eth-mobile.git";

export async function copyTemplateFiles(options: Options, _templateDir: string, targetDir: string) {
  const { solidityFramework } = options;

  const isFoundry = solidityFramework === SOLIDITY_FRAMEWORKS.FOUNDRY;

  const cloneArgs = isFoundry
    ? ["clone", "--branch", "foundry", "--single-branch", ETH_MOBILE_REPO, targetDir]
    : ["clone", ETH_MOBILE_REPO, targetDir];

  try {
    // Clone ETH Mobile into the target directory, choosing the branch based on the solidity framework
    await execa("git", cloneArgs);

    // If the user selected "none", trim the scaffold down to the Expo workspace only
    if (solidityFramework === null) {
      const hardhatDir = path.join(targetDir, "packages", "hardhat");
      if (fs.existsSync(hardhatDir)) {
        await fs.promises.rm(hardhatDir, { recursive: true, force: true });
      }

      const pkgPath = path.join(targetDir, "package.json");
      if (fs.existsSync(pkgPath)) {
        const pkgRaw = await fs.promises.readFile(pkgPath, "utf8");
        const pkg = JSON.parse(pkgRaw);

        if (pkg.workspaces && Array.isArray(pkg.workspaces.packages)) {
          pkg.workspaces.packages = ["packages/expo"];
        }

        pkg.scripts = {
          android: "yarn workspace @ethmobile/expo android",
          "build:android:dev": "yarn workspace @ethmobile/expo build:android:dev",
          "build:android:preview": "yarn workspace @ethmobile/expo build:android:preview",
          "build:android:prod": "yarn workspace @ethmobile/expo build:android:prod",
          "build:configure": "yarn workspace @ethmobile/expo build:configure",
          "build:ios:dev": "yarn workspace @ethmobile/expo build:ios:dev",
          "build:ios:preview": "yarn workspace @ethmobile/expo build:ios:preview",
          "build:ios:prod": "yarn workspace @ethmobile/expo build:ios:prod",
          "configure-network": "yarn workspace @ethmobile/expo configure-network",
          "expo:add": "yarn workspace @ethmobile/expo add",
          "expo:format": "yarn workspace @ethmobile/expo format",
          "expo:install": "yarn workspace @ethmobile/expo expo install",
          "expo:lint": "yarn workspace @ethmobile/expo lint",
          "expo:list-routes": "yarn workspace @ethmobile/expo list-routes",
          "expo:remove": "yarn workspace @ethmobile/expo remove",
          "expo:start": "yarn workspace @ethmobile/expo start",
          format: "yarn expo:format",
          ios: "yarn workspace @ethmobile/expo ios",
          lint: "yarn expo:lint",
          "list-routes": "yarn expo:list-routes",
          "patch-ethers": "yarn workspace @ethmobile/expo patch-ethers",
          postinstall: "husky install",
          prebuild: "yarn workspace @ethmobile/expo prebuild",
          start: "yarn expo:start",
          "submit:android": "yarn workspace @ethmobile/expo submit:android",
          "submit:ios": "yarn workspace @ethmobile/expo submit:ios",
        };

        await fs.promises.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
      }
    }
  } catch (error) {
    throw new Error("Failed to clone ETH Mobile template", { cause: error });
  }
}
