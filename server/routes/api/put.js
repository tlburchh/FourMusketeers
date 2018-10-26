const router = require("express").Router();
const putController = require("../../controllers/putController");

// Update a wine (mead) by ID
router.put("/wine/:id", putController.wineById);

// etc...

module.exports = router;