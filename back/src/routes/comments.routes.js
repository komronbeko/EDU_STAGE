const {Router} = require('express');
const { comments_post } = require('../controllers/comments/post');
const { comments_get } = require('../controllers/comments/get');

const router = Router();

router.get("/:post_id/comments", comments_get);
router.post("/:post_id/comment", comments_post);

module.exports = router;