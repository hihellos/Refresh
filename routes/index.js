const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authController = require("../controllers/authController");

// API Routes
router.use("/api", apiRoutes);

// Auth Routes
router.route("/login")
  .get(authController.loginGet)
  .post(authController.loginPost);

router.route("/signup")
  .get(authController.signupGet)
  .post(authController.signupPost);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

