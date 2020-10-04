const router = require("express").Router();
const homeController = require("../../controllers/homeController");

// match "/api/home/"
router.route("/")
  .get(homeController.findSeededRooms)

// match "/api/home/rooms/:id"
router.route("/rooms/:id")
  .post(homeController.saveUserRooms);

// match "/api/home/tasks/:id"
router.route("/tasks/:id")
  .put(homeController.addTask)
  .post(homeController.deleteTask);

// match "/api/home/task/:id"
router.route("/task/:id")
  .put(homeController.updateTask);
  
module.exports = router;

