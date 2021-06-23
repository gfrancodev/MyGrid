import { LogsIotCoreProvider } from '../../providers/implementations/ILogsIotCoreProvider'
import { LogsIotCoreRegistery } from '../../repositories/implementations/LogsIotCoreRegistery'
import { IotCoreRegisterLogsGateway } from './IotCoreRegisterLogsGateway'
import { IotCoreRegisterLogsUseCase } from './IotCoreRegisterLogsUseCase'

const logsIotCoreProvider = new LogsIotCoreProvider()
const logsIotCoreRegistery = new LogsIotCoreRegistery()

const iotCoreRegisterLogsUseCase = new IotCoreRegisterLogsUseCase(
  logsIotCoreRegistery
)

const iotCoreRegisterLogsGateway = new IotCoreRegisterLogsGateway(
  logsIotCoreProvider,
  iotCoreRegisterLogsUseCase
)

export { iotCoreRegisterLogsGateway, iotCoreRegisterLogsUseCase }
