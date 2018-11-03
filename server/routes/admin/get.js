const router = require("express").Router();
const getController = require("../../controllers/getController");

//for the button on admin page to view and edit all wines.
router.get("/allWines", getController.allWines);

//for the button on admin page to view and edit current wines.
router.get("/currentWines", getController.currentWines);


module.exports = router;