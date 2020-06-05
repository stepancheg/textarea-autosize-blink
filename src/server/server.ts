import express = require("express");
import bodyParser = require("body-parser");
import cookieParser = require("cookie-parser");
import { Express } from "express";
import { textarea_autosize_blink_setup_express } from "./textarea_autosize_blink";
import { createProxyMiddleware } from "http-proxy-middleware";

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(
  "/client",
  createProxyMiddleware({
    target: `http://localhost:3001/`,
  })
);

textarea_autosize_blink_setup_express(app);

app.listen(3000, () =>
  console.log(`learn-idris is listening at http://localhost:3000`)
);
