import { Colors } from "../../"

export function databaseError() {
  const log = console.log
  process.stdout.write("\u001b[2J\u001b[0;0H")
  log('\n\n\n')
  log(Colors.ERROR("D A T A B A S E  C O N N E C T I O N  R E F U S E D ❌"))
  log(Colors.ERROR('Enter the correct data in the environment variable "MONGO_URI" to make the connection.'))
}
