import { connect } from 'mongoose'
import { databaseError } from '../cli/infos/errors'
import { databaseSuccess } from '../cli/infos/success'

class MongooConnect {
  public connect(){
    connect(process.env.MONGOO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }).then((response) => {
      return databaseSuccess(response)
    }).catch(() => {
      databaseError()
    })
  }
}

export { MongooConnect }
