const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authController = require("../controllers/authController");
const { checkUser, requireAuth } = require("../middleware/authMiddleware");

// API Routes
router.use("/api", apiRoutes);

// Main Routes
router.get("/home", requireAuth, (req, res) => res.redirect('/home'));
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Auth Routes
router.route("/login")
  .get(authController.loginGet)
  .post(authController.loginPost);

router.route("/signup")
  .get(authController.signupGet)
  .post(authController.signupPost);

router.get("/logout", authController.logoutGet);

router.get("/jwt", authController.jwtGet);

router.get("*", checkUser);

module.exports = router;

