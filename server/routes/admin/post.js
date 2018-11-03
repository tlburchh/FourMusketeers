const router = require("express").Router();
const postController = require("../../controllers/postController");

router.post("/newWine", postController.insert);

module.exports =  router;