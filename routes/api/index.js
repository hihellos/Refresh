const router = require("express").Router();
const userRoutes = require("./user");
const homeRoutes = require("./home");

// Book routes
router.use("/user", userRoutes);
router.use("/home", homeRoutes);

module.exports = router;
