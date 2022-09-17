const server = require("./server/server");
const DbConncetion = require("./config/DBconnection");
const express = require("express");
const path = require("path");
server;
server.use("/api/v1/assets", express.static(path.join(__dirname, "uploads")));
DbConncetion;
