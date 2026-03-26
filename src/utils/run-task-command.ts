import { execaCommand } from "execa";
import { DefaultRenderer, ListrTaskWrapper, SimpleRenderer } from "listr2";

export async function runTaskCommand(
  command: string,
  targetDir: string,
  task: ListrTaskWrapper<any, typeof DefaultRenderer, typeof SimpleRenderer>,
) {
  const execute = execaCommand(command, { cwd: targetDir });
  let outputBuffer = "";
  const chunkSize = 1024;

  execute?.stdout?.on("data", (data: Buffer) => {
    outputBuffer += data.toString();
    if (outputBuffer.length > chunkSize) {
      outputBuffer = outputBuffer.slice(-1 * chunkSize);
    }

    const visibleOutput =
      outputBuffer
        .match(new RegExp(`.{1,${chunkSize}}`, "g"))
        ?.slice(-1)
        .map(chunk => chunk.trimEnd() + "\n")
        .join("") ?? outputBuffer;

    task.output = visibleOutput;
  });

  execute?.stderr?.on("data", (data: Buffer) => {
    outputBuffer += data.toString();
    if (outputBuffer.length > chunkSize) {
      outputBuffer = outputBuffer.slice(-1 * chunkSize);
    }

    const visibleOutput =
      outputBuffer
        .match(new RegExp(`.{1,${chunkSize}}`, "g"))
        ?.slice(-1)
        .map(chunk => chunk.trimEnd() + "\n")
        .join("") ?? outputBuffer;

    task.output = visibleOutput;
  });

  await execute;
}
