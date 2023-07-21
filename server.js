const express = require("express");
// node14以降は下記
import express from "express";

const app = express();
const axios = require("axios");
const port = 3000;

// "/api/get"は外で使うエンドポイント名
app.get("/api/get", (req, res) => {
  res.json(getResData);
});

// app.listen()の引数にローカルポート番号を指定する。
app.listen(port);
