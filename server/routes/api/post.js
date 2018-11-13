const router = require("express").Router();
const postController = require("../../controllers/postController");

// Post a review for a wine
router.post("/rating", postController.rating);

router.post("/addNewWine", postController.insert);

router.post("/wineOrder", postController.wineOrder);

// etc...

module.exports = router;