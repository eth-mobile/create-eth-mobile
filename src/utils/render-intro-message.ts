import chalk from "chalk";

export const TITLE_TEXT = `
 ${chalk.bold.green("+-+-+-+-+-+-+-+-+-+-+-+-+")}
 ${chalk.bold.green("|   Create ETH Mobile   |")}
 ${chalk.bold.green("+-+-+-+-+-+-+-+-+-+-+-+-+")}
`;

export function renderIntroMessage() {
  console.log(TITLE_TEXT);
}
