import { Colors } from "../../"

export function databaseSuccess(response: any) {
  const log: any = console.log
  process.stdout.write("\u001b[2J\u001b[0;0H")
  log('\n\n\n')
  log(Colors.INFO(`
  #   /$$      /$$ /$$     /$$ /$$$$$$  /$$$$$$$  /$$$$$$ /$$$$$$$
  #  | $$$    /$$$|  $$   /$$//$$__  $$|$$_____$$|_ $$_/| $$__  $$
  #  | $$$$  /$$$$ \  $$ /$$/| $$  \__/ | $$     $$ | $$  | $$   | $$
  #  | $$ $$/$$ $$  \  $$$$/ | $$ /$$$$| $$$$$$$/  | $$  | $$   | $$
  #  | $$  $$$| $$   \  $$/  | $$|_  $$| $$__  $$  | $$  | $$   | $$
  #  | $$\  $ | $$    | $$   | $$  \ $$|  $$   \ $$  | $$  | $$   | $$
  #  | $$ \/  | $$    | $$   |  $$$$$$/| $$  | $$ /$$$$$$| $$$$$$$/
  #  |__/     |__/    |__/    \______/ |__/  |__/|______/|_______/
  #
  #
  #
  `))
  log(Colors.INFO("D A T A B A S E  C O N N E C T E D  ✅\n"))
  log("NAME ",Colors.SUCCESS(response.connection.name))
  log("HOST ", Colors.SUCCESS(response.connection.host))
  log("PORT ", Colors.SUCCESS(response.connection.port))
}
