import path from 'path'
import { get } from '../util/request'
import { readFileSync } from '../util/file'

export async function getHotKey(req, res) {
  const resp = await get('/search/queryHotKeyWord.json')
  const { data } = JSON.parse(resp.body)
  res.send({ data })
}

export async function getCategoryList(req, res) {
  const resp = await get('/globalinfo//queryTop.json')
  const { data } = JSON.parse(resp.body)
  res.send({ data })
}

export async function getShopList(req, res) {
  const { categoryId = '1005000', subCategoryId = '1008012' } = req.query
  const url = `/item/listByCategory.json?subCategoryId=${subCategoryId}&categoryId=${categoryId}`
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
  res.send({ data: { category, list } })
}

const dir = path.resolve(__dirname, '../mock/carousel.json')

export async function getShopCarousel(req, res) {
  const carsouselList = readFileSync(dir)
  res.send({ status: 'success', data: carsouselList })
}
