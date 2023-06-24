const {Router} = require("express");
const is_admin = require("../middlewares/is-admin");
const { posts_get, post_get_one, filter_by_category } = require("../controllers/posts_controllers/get");
const { posts_post } = require("../controllers/posts_controllers/post");
const { posts_edit } = require("../controllers/posts_controllers/edit");
const { posts_delete } = require("../controllers/posts_controllers/delete");

const router = Router();

router.get("/posts", posts_get);
router.get("/post/:id", post_get_one);
router.get("/categories/:category", filter_by_category);
router.post("/post", is_admin, posts_post);
router.put("/post/:id", is_admin, posts_edit);
router.delete("/post/:id", is_admin, posts_delete);

module.exports = router