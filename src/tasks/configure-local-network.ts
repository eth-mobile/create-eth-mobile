import { DefaultRenderer, ListrTaskWrapper, SimpleRenderer } from "listr2";
import { Options } from "../types";
import { SOLIDITY_FRAMEWORKS } from "../utils/consts";
import { runTaskCommand } from "../utils/run-task-command";

export async function configureLocalNetwork(
  targetDir: string,
  task: ListrTaskWrapper<any, typeof DefaultRenderer, typeof SimpleRenderer>,
) {
  await runTaskCommand("yarn configure-network", targetDir, task);
}

export function shouldConfigureLocalNetwork(options: Options) {
  return (
    options.solidityFramework === SOLIDITY_FRAMEWORKS.HARDHAT ||
    options.solidityFramework === SOLIDITY_FRAMEWORKS.FOUNDRY
  );
}
