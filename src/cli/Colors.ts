import chalk from "chalk"
new chalk.Instance({level: 3})

export const Colors = {
  SUCCESS: chalk.bold.hex('#09DA7B'),
  ERROR: chalk.bold.hex('#FF3254 '),
  INFO: chalk.bold.hex('#7FD6FE')
}
