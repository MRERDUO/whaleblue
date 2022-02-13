import { Module } from '@nestjs/common'
import { UserModule } from './module/user/user.module'

@Module({
  imports: [UserModule],
  providers: [],
})
export class AppModule {}
