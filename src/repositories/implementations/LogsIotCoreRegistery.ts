import Log from "../../entities/Log";
import { ILogsIotCoreRegistery } from "../ILogsIotCoreRegistery";

class LogsIotCoreRegistery implements ILogsIotCoreRegistery {
  public async createLog(data: any): Promise<Object> {
    return await Log.create(data)
  }
}

export { LogsIotCoreRegistery }
