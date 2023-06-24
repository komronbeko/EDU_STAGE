const {Router} = require("express");
const is_super_admin = require("../middlewares/is-superAdmin");
const { admins_get, admin_get_One } = require("../controllers/admins_controllers/get");
const { admin_post } = require("../controllers/admins_controllers/post");
const admin_delete = require("../controllers/admins_controllers/delete");
const is_admin = require("../middlewares/is-admin");
const admin_edit = require("../controllers/admins_controllers/edit");

const router = Router();

router.get("/admins", is_super_admin, admins_get);
router.get("/admin", is_admin, admin_get_One);
router.post("/admin", is_super_admin, admin_post);
router.delete("/admin/:id", is_super_admin, admin_delete);
router.put("/admin", is_admin, admin_edit);

module.exports = router;