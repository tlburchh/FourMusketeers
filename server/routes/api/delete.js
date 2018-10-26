const router = require("express").Router();
const deleteController = require("../../controllers/deleteController");

router.get("/", deleteController.getRoot);

// etc...

module.exports = router;