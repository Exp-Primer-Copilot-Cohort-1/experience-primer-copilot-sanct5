// Create web server
const express = require("express");
const router = express.Router();

router.get("/", commentController.coment_list)