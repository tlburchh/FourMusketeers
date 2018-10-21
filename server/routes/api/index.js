const router = require("express").Router();
const trailRoutes = require("./trails");

// Book routes
router.use("/trails", trailRoutes);

module.exports = router;
