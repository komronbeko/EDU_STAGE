const { fetch } = require("../../utils/pg");

//-------CATEGORIES-GET------>
const CATEGORY_SQL = "select category_name, count(category_id) from categories group by category_name";

const categories_get_data = async () => fetch(CATEGORY_SQL);

//-------POPULAR-POSTS-------->
const POPULAR_POSTS_SQL = "select * from posts order by post_views_count desc OFFSET 0 LIMIT 4";

const popular_posts_data = async() => fetch(POPULAR_POSTS_SQL);

module.exports = {categories_get_data, popular_posts_data};
