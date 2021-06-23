import { DateTime } from 'luxon'
import { Colors } from '../../'

export function iotCoreRealTimeSuccess(data) {
  const log = console.log
  const table = console.table

  const time = DateTime.now().setZone(process.env.TIMEZONE).toISO()

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
  log(Colors.SUCCESS("[REAL TIME IOT CORE AWS] 📈"))
  log("LAST UPDATE: ", Colors.INFO(new Date(time), "\n"))
  table([data, ])
}
