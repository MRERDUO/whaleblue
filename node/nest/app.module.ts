import { Module } from '@nestjs/common'
import { ShopModule } from './module/shop/shop.module'
import { UserModule } from './module/user/user.module'

@Module({
  imports: [UserModule, ShopModule],
  providers: [],
})
export class AppModule {}
