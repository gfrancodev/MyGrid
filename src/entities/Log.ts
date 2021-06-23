import { Schema, model } from 'mongoose'
import { DateTime } from 'luxon'

class Log {

  public mongo(){
    const logSchema = new Schema({
      logs: { type: Object },
      createdAt: { type: Date, default: DateTime.now().setZone(process.env.TIMEZONE).toISO() }
     })
    return model('logs', logSchema)
  }
}

export default new Log().mongo()
