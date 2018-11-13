const router = require("express").Router();
const getController = require("../../controllers/getController");

// User stuff
router.get("/users", getController.users);

// Wine stuff
router.get("/allWines", getController.allWines);
router.get("/currentWines", getController.currentWines);
router.get("/wine/:id", getController.wineById);


// Review stuff
router.get("/ratings", getController.ratings);

// Keyword stuff
router.get("/keywords", getController.keywords);

router.get("/seed", getController.seed);


router.get("/colors", getController.colors);
// etc...

module.exports = router;