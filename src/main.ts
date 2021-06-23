import { config } from 'dotenv'
import { MongooConnect } from './database/MongooConnect'
import { iotCoreRegisterLogsGateway } from './useCases'
config()

class Main {
  constructor(
    private Database: MongooConnect,
  ){
    this.gateway()
    this.database()
  }

  private database(){
    this.Database.connect()
  }

  public gateway(){
    iotCoreRegisterLogsGateway.handle()
  }
}

export default new Main(new MongooConnect)
