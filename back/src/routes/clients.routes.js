const {Router} = require("express");
const { client_get } = require("../controllers/clients_controllers/get");
const { client_post } = require("../controllers/clients_controllers/post");
const { client_edit } = require("../controllers/clients_controllers/edit");
const { client_delete } = require("../controllers/clients_controllers/delete");
const is_admin = require("../middlewares/is-admin");

const router = Router();

router.get("/clients", client_get);
router.post("/client", is_admin, client_post);
router.put("/client/:id", is_admin, client_edit);
router.delete("/client/:id", is_admin, client_delete);

module.exports = router