const router = require("express").Router();
const userController = require("../../controllers/userController");

// "/api/user"
router.route("/")
  .get(userController.findById);
  // .post(userController.create)
  // .put(userController.update)
  // .delete(userController.remove);

router.route("/:id")
  .get(userController.findAll);

module.exports = router;
