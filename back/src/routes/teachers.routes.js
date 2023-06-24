const {Router} = require("express");
const is_admin = require("../middlewares/is-admin");
const { teacher_get } = require("../controllers/teachers/get");
const { teacher_post } = require("../controllers/teachers/post");
const { teacher_edit } = require("../controllers/teachers/edit");
const { teacher_delete } = require("../controllers/teachers/delete");

const router = Router();

router.get("/teachers", teacher_get);
router.post("/teacher", is_admin, teacher_post);
router.put("/teacher/:id", is_admin, teacher_edit);
router.delete("/teacher/:id", is_admin, teacher_delete);

module.exports = router