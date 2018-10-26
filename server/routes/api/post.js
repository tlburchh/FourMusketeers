const router = require("express").Router();
const postController = require("../../controllers/postController");

// Post a review for a wine
router.post("/review", postController.review);

// etc...

module.exports = router;