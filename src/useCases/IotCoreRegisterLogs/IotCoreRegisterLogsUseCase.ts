import { ServerError } from '../../errors'
import { ILogsIotCoreRegistery } from '../../repositories/ILogsIotCoreRegistery'
import { IotCoreRegisterLogsDTO } from './IotCoreRegisterLogsDTO'

class IotCoreRegisterLogsUseCase {
  constructor(
    private ILogsIotCoreRegister:ILogsIotCoreRegistery
  ) {}

  public async execute(data: IotCoreRegisterLogsDTO){
    await this.ILogsIotCoreRegister.createLog({ logs: data }).catch(() => {
      throw new ServerError("Failed to in insert data.")
    })
  }
}

export { IotCoreRegisterLogsUseCase }
