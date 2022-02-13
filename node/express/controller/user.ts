import * as path from 'path'
import { writeFiletoAdd, readFileSync } from '../util/file'

const dir = path.resolve(__dirname, '../mock/user.json')

export function login(req, res) {
  const { account, password } = req.body
  const accountJSON = readFileSync(dir)

  if (accountJSON[account]?.password === password) {
    res.send({ status: 'success', code: 200 })
  } else {
    res.send({ status: 'error', code: 404 })
  }
}

export function register(req, res) {
  const { account, password } = req.body
  writeFiletoAdd(dir, { [account]: { password, shopCar: [] } })
  res.send({ status: 'success' })
}
