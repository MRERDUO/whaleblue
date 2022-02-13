import express from "express";
import * as user from "../controller/user";
import * as shop from "../controller/shop";
const router = express.Router();

const list = [
  { path: "/user/login", type: "post", controller: user.login },
  { path: "/user/register", type: "post", controller: user.register },
  { path: "/shop/list", type: "get", controller: shop.getShopList },  //商品列表页数据
  { path: "/shop/hotKey", type: "get", controller: shop.getHotKey },  //热门商品数据
  { path: "/shop/category", type: "get", controller: shop.getCategoryList },  //商品导航栏数据
  { path: "/shop/carousel", type: "get", controller: shop.getShopCarousel },  //轮播图图片
];

list.forEach(({ path, type, controller }) => router[type](path, controller));

export default router;
