import chalk from "chalk";

export const showHelpMessage = () => {
  console.log(` ${chalk.bold.blue("Usage:")}
    ${chalk.bold.green("npx eth-mobile<@version>")} ${chalk.gray("[--skip | --skip-install] [-s <solidity-framework> | --solidity-framework <solidity-framework>] [-e <extension> | --extension <extension>] [-h | --help]")}
`);
  console.log(` ${chalk.bold.blue("Options:")}
    ${chalk.gray("--skip, --skip-install")}       Skip packages installation
    ${chalk.gray("-s, --solidity-framework")}     Choose solidity framework (hardhat | foundry)
    ${chalk.gray("-h, --help")}                   Help
    `);
};
