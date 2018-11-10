const router = require("express").Router();
const postController = require("../../controllers/postController");

// Post a review for a wine
router.post("/rating", postController.rating);

router.post("/addNewWine", postController.insert);

router.post("/testRating", postController.testRating);

router.post("/testKeys", postController.testKeyword);

router.post("/testWine", postController.testWine);
// etc...

module.exports = router;