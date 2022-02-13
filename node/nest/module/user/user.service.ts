import path from 'path'
import { Injectable } from '@nestjs/common'
import { writeFiletoAdd, readFileSync } from '../../../util/file'

const dir = path.resolve(__dirname, '../../../mock/user.json')
@Injectable()
export class UserService {
  constructor() {}

  login({ account, password }) {
    const accountJSON = readFileSync(dir)
    if (accountJSON[account]?.password === password) {
      return { status: 'success', code: 200 }
    } else {
      return { status: 'error', code: 404 }
    }
  }

  register({ account, password }) {
    writeFiletoAdd(dir, { [account]: { password, shopCar: [] } })
    return { status: 'success' }
  }
}
