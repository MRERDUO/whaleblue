import { Controller, Get, Req, Body } from '@nestjs/common'
import { ShopService } from './shop.service'

@Controller('/shop')
export class ShopController {
  constructor(private readonly ShopService: ShopService) {}

  @Get('/hotkey')
  hotkey() {
    return this.ShopService.hotkey()
  }

  @Get('/category')
  categoryList() {
    return this.ShopService.categoryList()
  }

  @Get('/list')
  shopList(@Req() req, @Body() body) {
    const { categoryId = '1005000', subCategoryId = '1008012' } = body
    return this.ShopService.shopList({ categoryId, subCategoryId })
  }

  @Get('/carousel')
  shopCarousel() {
    return this.ShopService.shopCarousel()
  }
}
