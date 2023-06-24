const {Router} = require("express");
const { categories_get, popular_posts } = require("../controllers/filters_controllers/get");

const router = Router();

router.get("/categories", categories_get);
router.get("/popular-posts", popular_posts);

module.exports = router;
