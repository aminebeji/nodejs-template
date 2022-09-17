const express = require("express");
const router = express.Router();
const controller = require("./../controllers/AuthController");
router.get("/user/:id", controller.getUser);
module.exports = router;
