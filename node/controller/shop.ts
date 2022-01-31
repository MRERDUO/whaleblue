import path from "path";
import { readFileSync } from "../util/file";

export function getList(req, res) {
  const { id } = req.query;
  const dirPath = path.resolve(__dirname, "../mock/shop.json");
  const content = readFileSync(dirPath, { encoding: "utf8" });
  const hitData = JSON.parse(content)[id];
  res.send({ data: hitData});
}

// temp4.map(({name,listPicUrl,scenePicUrl,retailPrice,simpleDesc,counterPrice})=>{
//     return {name,defaImg:listPicUrl,examImg:scenePicUrl,shopPrice:retailPrice,desc:simpleDesc,counterPrice}
//     })
