import express from "express";
import router from "./router";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

const CORS = cors((req, callback) => {
  callback(null, { origin: true });
});


app.use(CORS);

//解析application/json
app.use(bodyParser.json());

//解析application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//解析text/plain
app.use(bodyParser.text({ limit: "50mb" }));

app.use(bodyParser.raw());

app.use("/api", router);

app.listen(8080);
