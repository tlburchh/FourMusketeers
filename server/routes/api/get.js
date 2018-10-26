const router = require("express").Router();
const getController = require("../../controllers/getController");

router.get("/users", getController.users);

router.get("/wines", getController.wines);

router.get("/reviews", getController.reviews);

router.get("/keywords", getController.keywords);


// etc...

module.exports = router;