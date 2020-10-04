const router = require("express").Router();
const userController = require("../../controllers/userController");

// match "/api/user/"
router.route("/")
  .get(userController.findById);

// match "api/user/:id"
router.route("/:id")
  .get(userController.findAll);

module.exports = router;
