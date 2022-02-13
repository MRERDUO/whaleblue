import path from 'path'
import { Injectable } from '@nestjs/common'
import { get } from '../../../util/request'
import { readFileSync } from '../../../util/file'

const dir = path.resolve(__dirname, '../../../mock/carousel.json')

@Injectable()
export class ShopService {
  constructor() {}

  async hotkey() {
    const resp = await get('/search/queryHotKeyWord.json')
    const { data } = JSON.parse(resp.body)
    return { data }
  }

  async categoryList() {
    const resp = await get('/globalinfo//queryTop.json')
    const { data } = JSON.parse(resp.body)
    return { data }
  }

  async shopList(data: { categoryId: string; subCategoryId: string }) {
    const url = `/item/listByCategory.json?subCategoryId=${data.subCategoryId}&categoryId=${data.categoryId}`
    const resp = await get(url)
    const {
      data: { category, itemList },
      code,
    } = JSON.parse(resp.body)
    if (code !== '200') return
    const list = itemList.map((item) => {
      return {
        name: item.name,
        defaImg: item.listPicUrl,
        examImg: item.scenePicUrl,
        shopPrice: item.retailPrice,
        desc: item.simpleDesc,
        counterPrice: item.counterPrice,
      }
    })

    return { data: { category, list } }
  }

  async shopCarousel() {
    const carsouselList = readFileSync(dir)
    return { status: 'success', data: carsouselList }
  }
}
