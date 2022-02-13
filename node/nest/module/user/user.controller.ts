import { Controller, Post, Req, Body } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('/user')
export class UserController {
  constructor(private readonly UserService: UserService) {}
  @Post('/login')
  login(@Req() req, @Body() body) {
    console.log(body)
    return this.UserService.login()
  }
}
