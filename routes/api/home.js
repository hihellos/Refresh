const router = require("express").Router();
const homeController = require("../../controllers/homeController");

// match /api/home
router.route("/")
  .get(homeController.findSeededRooms)

// match /api/home/rooms
router.route("/rooms/:id")
  .post(homeController.saveUserRooms);

// match /api/home/:id
router.route("/tasks/:id")
  .put(homeController.addTask)
  .post(homeController.deleteTask);

router.route("/task/:id")
  .put(homeController.updateTask);
  
module.exports = router;

