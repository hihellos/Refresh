const router = require("express").Router();
const homeController = require("../../controllers/homeController");

// "/api/home"
router.route("/")
  // .get(homeController.findAll)
  // .post(homeController.create)
  // .put(homeController.update)
  // .delete(homeController.remove);

router.route("/:id")
.post(homeController.create);

module.exports = router;
