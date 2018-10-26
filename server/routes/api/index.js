const router = require("express").Router();
const getRoutes = require("./get");
const postRoutes = require("./post");
const putRoutes = require("./put");
const deleteRoutes = require("./delete");

// get routes, etc....
router.use("/get", getRoutes);
router.use("/post", postRoutes);
router.use("/put", putRoutes);
router.use("/delete", deleteRoutes);

module.exports = router;

