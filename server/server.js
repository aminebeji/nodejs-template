const express = require("express");
const cors = require("cors");
const server = express();
const AuthRouter = require("./../routers/AuthRouter");
const cookieParser = require("cookie-parser");
const Logger = require("./../utils/Logger");
const Routes = require("./../utils/routes");

const PORT = process.env.PORT || 5001;
server.use(express());
server.use(cors());
server.use(express.json());
server.use(cookieParser());
server.use(Logger);
server.use("/api/v1", [ AuthRouter]);

server.listen(PORT, () => {
  console.log(`server running on PORT =  ${PORT}`);
  Routes(server);
});
module.exports = server;
