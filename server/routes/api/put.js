const router = require("express").Router();
const putController = require("../../controllers/putController");

router.get("/", putController.getRoot);

// etc...

module.exports = router;