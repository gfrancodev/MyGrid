import { device } from 'aws-iot-device-sdk'
import { iotCoreRealTimeSuccess } from '../../cli/infos/success'
import { ServerError } from '../../errors'
import { ILogsIotCoreProvider } from '../../providers/ILogsIotCoreProvider'
import { IotCoreRegisterLogsUseCase } from './IotCoreRegisterLogsUseCase'

class IotCoreRegisterLogsGateway {
  constructor(
    private ILogsIotCoreProvider: ILogsIotCoreProvider,
    private ICoreRegisterLogsUseCase: IotCoreRegisterLogsUseCase
  ) {}

  public async handle(){
    const IotCore = new device(await this.ILogsIotCoreProvider.AuthIotCore())

    IotCore.on("connect", () => {
      IotCore.subscribe(process.env.IOT_CORE_TOPIC);
    })

    IotCore.on("message", async(topic, payload) => {
      const data = JSON.parse(payload.toString())

      iotCoreRealTimeSuccess(data)

      try {
          await this.ICoreRegisterLogsUseCase.execute(data)
       } catch (error) {
          if (error instanceof ServerError) {
            console.error(error.message)
          }
       }
    })

    IotCore.on("error", (error) => { IotCore.on("reconnect", () => { "reconectando..." })
    })
  }
}

export { IotCoreRegisterLogsGateway }
