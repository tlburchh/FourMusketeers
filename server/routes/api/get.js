const router = require("express").Router();
const getController = require("../../controllers/getController");

router.get("/", getController.getRoot);

// etc...

module.exports = router;