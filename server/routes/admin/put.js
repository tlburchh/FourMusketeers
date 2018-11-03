const router = require("express").Router();
const putController = require("../../controllers/putController");

router.put("/wine/:id", putController.wineById);

module.exports =  router;