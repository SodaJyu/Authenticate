import express from 'express';

const authController = require("../controllers/authController");

const router = express.Router();

router.get("/", authController.getAllUsers);
router.get("/:id", authController.getUserById);
router.post("/", authController.createUser);
//router.put("/:id", authController.updateUser);

module.exports = router;