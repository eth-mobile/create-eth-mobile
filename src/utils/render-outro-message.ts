import type { Options } from "../types";
import chalk from "chalk";

export function renderOutroMessage(options: Options) {
  let message = `
  \n
  ${chalk.bold.green("Congratulations!")} Your ETH Mobile project is ready! 🎉

  ${chalk.bold("Next steps:")}
  
  ${chalk.dim("cd")} ${options.project}
  `;

  if (options.solidityFramework) {
    message += `
    \t${chalk.bold("Start the local development node")}
    \t${chalk.dim("yarn")} chain
    `;

    message += `
    \t${chalk.bold("In a new terminal window, deploy your contracts")}
    \t${chalk.dim("yarn")} deploy
    `;

    message += `
    \t${chalk.bold("Configure the local network provider")}
    \t${chalk.dim("yarn")} configure-network
    `;
  }

  if (!options.install) {
    message += `
    \t${chalk.bold("Install dependencies")}
    \t${chalk.dim("yarn")}
    `;
  }

  message += `
  \t${chalk.bold("Prebuild native modules")}
  \t${chalk.dim("yarn")} prebuild
  `;

  message += `
  \t${chalk.bold("Start the Expo dev server")}
  \t${chalk.dim("yarn")} start
  `;

  message += `
  \t${chalk.bold.blue("Please leave us a ⭐ to encourage other builders")}
  \t${chalk.dim("https://github.com/eth-mobile/eth-mobile")}
  `;

  message += `
  \t${chalk.bold("In a new terminal window, run on Android")}
  \t${chalk.dim("yarn")} android
  `;

  message += `
  \t${chalk.bold("In a new terminal window, run on iOS")}
  \t${chalk.dim("yarn")} ios
  `;

  message += `
  ${chalk.bold.green("Thanks for using ETH Mobile 🙇‍♂️, Happy Building!")}
  `;

  console.log(message);
}
