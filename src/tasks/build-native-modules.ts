import { DefaultRenderer, ListrTaskWrapper, SimpleRenderer } from "listr2";
import { runTaskCommand } from "../utils/run-task-command";

export async function buildNativeModules(
  targetDir: string,
  task: ListrTaskWrapper<any, typeof DefaultRenderer, typeof SimpleRenderer>,
) {
  await runTaskCommand("yarn prebuild", targetDir, task);
}
