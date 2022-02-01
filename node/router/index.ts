import express from "express";
import * as user from "../controller/user";
import * as shop from "../controller/shop";
const router = express.Router();

const list = [
  { path: "/user/login", type: "post", controller: user.login },
  { path: "/user/register", type: "post", controller: user.register },
  { path: "/shop/list", type: "get", controller: shop.getShopList },
  { path: "/shop/hotList", type: "get", controller: shop.getHotShopList},
  { path: "/shop/category", type: "get", controller: shop.getCategoryList }
];

list.forEach(({ path, type, controller }) => router[type](path, controller));

export default router;
