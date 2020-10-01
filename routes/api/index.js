const router = require("express").Router();
const userRoutes = require("./user");
const homeRoutes = require("./home");

// match /api/user
router.use("/user", userRoutes);

// match /api/home
router.use("/home", homeRoutes);

module.exports = router;
