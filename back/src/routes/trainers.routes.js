const {Router} = require("express");
const { trainer_get } = require("../controllers/trainers_controllers/get");
const { trainer_post } = require("../controllers/trainers_controllers/post");
const { trainer_edit } = require("../controllers/trainers_controllers/edit");
const { trainer_delete } = require("../controllers/trainers_controllers/delete");
const is_admin = require("../middlewares/is-admin");

const router = Router();

router.get("/trainers", trainer_get);
router.post("/trainer", is_admin, trainer_post);
router.put("/trainer/:id", is_admin, trainer_edit);
router.delete("/trainer/:id", is_admin, trainer_delete);

module.exports = router