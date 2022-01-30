import express from "express";
import * as user from "../controller/user";
import * as shop from "../controller/shop";
const router = express.Router();

const list = [
  { path: "/user/login", type: "post", controller: user.login },
  { path: "/user/register", type: "post", controller: user.register },
  { path: "/shop/detail", type: "get", controller: shop.getShopInfo },
];

list.forEach(({ path, type, controller }) => router[type](path, controller));

export default router;
