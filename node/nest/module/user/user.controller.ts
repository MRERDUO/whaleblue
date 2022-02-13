import { Controller, Post, Req, Body } from '@nestjs/common'
import { UserService } from './user.service'
import { writeFiletoAdd, readFileSync } from '../../../util/file'

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post('/login')
  login(@Req() req, @Body() body: { account: string; password: string }) {
    return this.UserService.login(body)
  }

  @Post('/register')
  register(@Req() req, @Body() body: { account: string; password: string }) {
    return this.UserService.register(body)
  }
  
}
