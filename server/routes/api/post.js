const router = require("express").Router();
const postController = require("../../controllers/postController");

router.get("/", postController.getRoot);

// etc...

module.exports = router;