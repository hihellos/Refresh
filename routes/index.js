const path = require("path");
const router = require("express").Router();
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");

router.use("/api/user")
  .get(userController.findAll)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove);

router.use("/api/home")
  .get(homeController.findAll)
  .post(homeController.create)
  .put(homeController.update)
  .delete(homeController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
