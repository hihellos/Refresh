const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authController = require("../controllers/authController");
const { checkUser, requireAuth } = require("../middleware/authMiddleware");

// Main Routes
router.get("*", checkUser);
router.get("/home", requireAuth, (req, res) => res.redirect('/home'));
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// API Routes
router.use("/api", apiRoutes);

// Auth Routes
router.route("/login")
  .get(authController.loginGet)
  .post(authController.loginPost);

router.route("/signup")
  .get(authController.signupGet)
  .post(authController.signupPost);

router.get("/logout", authController.logoutGet)

module.exports = router;

