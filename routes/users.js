var express = require("express");
var router = express.Router();
const userController = require("../controllers/UserController");
router.get('/users', userController.getUsers)
router.get('/users/create', userController.create)
router.get('/users/:id', userController.getUserById)
router.post('/users', userController.createUser)
router.put('/users/:id', userController.updateUser)
router.delete('/users/:id', userController.deleteUser)

module.exports = router;