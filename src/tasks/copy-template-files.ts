import { execa } from "execa";
import type { Options } from "../types";

const ETH_MOBILE_REPO = "https://github.com/dewdrip/eth-mobile.git";

export async function copyTemplateFiles(_options: Options, _templateDir: string, targetDir: string) {
  try {
    // Clone ETH Mobile into the target directory
    await execa("git", ["clone", ETH_MOBILE_REPO, targetDir]);
  } catch (error) {
    throw new Error("Failed to clone ETH Mobile template", { cause: error });
  }
}
