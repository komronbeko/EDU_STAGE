const {Router} = require("express");
const { contact_get } = require("../controllers/contacts_controllers/get");
const { contact_post } = require("../controllers/contacts_controllers/post");
const is_admin = require("../middlewares/is-admin");

const router = Router();

router.get("/contacts", is_admin, contact_get);
router.post("/contact", contact_post);

module.exports = router