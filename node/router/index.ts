import express from "express";
import * as user from "../controller/user";

const router = express.Router();

const list = [
  { path: "/user/login", type: "post", controller: user.login },
  { path: "/user/register", type: "post", controller: user.register }
];

list.forEach(({ path, type, controller }) => router[type](path, controller));

export default router;
