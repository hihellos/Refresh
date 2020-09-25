const router = require("express").Router();
const userController = require("../../controllers/userController");

// "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
