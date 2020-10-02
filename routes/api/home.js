const router = require("express").Router();
const homeController = require("../../controllers/homeController");

// match /api/home
router.route("/")
  .get(homeController.findSeededRooms)
  // .post(homeController.make);
  // .put(homeController.update)
  // .delete(homeController.remove);

// match /api/home/rooms
router.route("/rooms/:id")
  .post(homeController.saveUserRooms);

// match /api/home/:id
router.route("/tasks/:id")
  .put(homeController.addTask)
  .delete(homeController.deleteTask);

module.exports = router;

