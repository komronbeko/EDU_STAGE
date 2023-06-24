const {Router} = require("express");
const { learners_no_money_get } = require("../controllers/learners_free_controllers/get");
const { learners_no_money_post } = require("../controllers/learners_free_controllers/post");
const is_admin = require("../middlewares/is-admin");

const router = Router();

router.get("/freeLearners", is_admin, learners_no_money_get);
router.post("/freeLearner", learners_no_money_post);

module.exports = router