import axios from 'axios'
import path from 'path'
import fs from 'fs'
import { ILogsIotCoreProvider } from '../ILogsIotCoreProvider'

class LogsIotCoreProvider implements ILogsIotCoreProvider {

  public async AuthIotCore (): Promise<Object> {
    const dir = "./src/auth"
    if(!fs.existsSync(dir)) { fs.mkdirSync(dir) }

    return {
      certPath: await this.PathAuth(process.env.IOT_CORE_CERTPATH_URL, "certPath"),
      keyPath: await this.PathAuth(process.env.IOT_CORE_KEYPATH_URL, "keyPath"),
      caPath: await this.PathAuth(process.env.IOT_CORE_CATH_URL, "caPath"),
      clientId: process.env.IOT_CORE_HOST,
      host: process.env.IOT_CORE_HOST
    }
  }

  public async PathAuth(env: string, name: string): Promise<any> {
    await axios.get(env).then(response => {
      fs.writeFileSync(path.resolve(`src/auth/${name}.txt`), response.data.trim())
    })
    return path.resolve(`src/auth/${name}.txt`)
  }
}

export { LogsIotCoreProvider }
