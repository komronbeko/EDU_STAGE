const {Router} = require("express");
const { event_get } = require("../controllers/events_controllers/get");
const { event_post } = require("../controllers/events_controllers/post");
const { event_edit } = require("../controllers/events_controllers/edit");
const { event_delete } = require("../controllers/events_controllers/delete");
const is_admin = require("../middlewares/is-admin");

const router = Router();

router.get("/events", event_get);
router.post("/event", is_admin, event_post);
router.put("/event/:id", is_admin, event_edit);
router.delete("/event/:id", is_admin, event_delete);

module.exports = router