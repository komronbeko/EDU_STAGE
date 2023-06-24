const {Router} = require("express");
const { login_controller } = require("../controllers/auth_controllers/login");

const router = Router();

router.post("/auth/login", login_controller);

module.exports = router;