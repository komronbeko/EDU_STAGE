const { fetch, fetchOne } = require("../../utils/pg");

//-----------GET------->
const GET_SQL = "select * from posts";
const get_data = async () => fetch(GET_SQL);

//-----------GET-ONE------->
const GET_ONE_SQL = `SELECT
json_build_object(
  'post_id', p.post_id,
  'author', (
    SELECT json_build_object(
      'author_name', a.admin_name,
      'author_image', a.admin_image,
       'author_job', a.admin_job,
       'author_description', a.admin_description,
       'author_facebook_link', a.admin_facebook_link,
       'author_twitter_link', a.admin_twitter_link,
       'author_linkedin_link', a.admin_linkedin_link,
       'author_pinterest_link', a.admin_pinterest_link
    )
    FROM admins a
    WHERE a.admin_id = p.admin_id
  ),
  'title', p.post_title,
  'description', p.post_text,
  'comments', (
    SELECT JSON_AGG(json_build_object(
      'comment_id', c.comment_id,
      'comment_author', c.comment_author,
      'comment_email', c.comment_email,
      'comment_subject', c.comment_subject,
      'comment_message', c.comment_message,
      'comment_created_at', c.comment_created_at
    ))
    FROM comments c
    WHERE c.post_id = p.post_id
  )
) AS post
FROM posts p where p.post_id = $1`;

const post_get_one_data = async(id)=> fetchOne(GET_ONE_SQL, id);

//-----------FILTER-BY-CATEGORY------->

const FILTER_WITH_CATEGORY_SQL = "select * from posts where post_category = $1";

const filter_by_category_data = async(category)=> fetch(FILTER_WITH_CATEGORY_SQL, category);


//-----------POST------->
const POST_SQL =
  "insert into posts(post_id, admin_id, post_category, post_title, post_text, post_image, post_facebook_link, post_twitter_link, post_linkedin_link, post_pinterest_link)values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";

const post_data = async (
  {
    post_category,
    post_title,
    post_text,
    post_image,
    post_facebook_link,
    post_twitter_link,
    post_linkedin_link,
    post_pinterest_link,
  },
  admin_id,
  post_id
) => {
  try {
    return fetch(
      POST_SQL,
      post_id,
      admin_id,
      post_category,
      post_title,
      post_text,
      post_image,
      post_facebook_link,
      post_twitter_link,
      post_linkedin_link,
      post_pinterest_link
    );
  } catch (error) {
    console.log(error);
  }
};

const INSERT_CATEGORY_SQL =
  "insert into categories(category_name, post_id)values($1, $2)";

const insert_category = async (post_category, post_id) => {
  return await fetch(INSERT_CATEGORY_SQL, post_category, post_id);
};

//-----------DELETE------->
const DELETE_SQL = "delete from posts where post_id = $1";
const delete_data = async (id) => fetch(DELETE_SQL, id);

//-----------EDIT------->
const EDIT_SQL =
  "update posts set post_category = $2, post_title = $3, post_text = $4, post_facebook_link = $5, post_twitter_link = $6, post_linkedin_link = $7, post_pinterest_link = $8, post_views_count = COALESCE($9, post_views_count) where post_id = $1";

const edit_data = async (
  {
    post_category,
    post_title,
    post_text,
    post_facebook_link,
    post_twitter_link,
    post_linkedin_link,
    post_pinterest_link,
    post_views_count
  },
  id
) =>
  fetch(
    EDIT_SQL,
    id,
    post_category,
    post_title,
    post_text,
    post_facebook_link,
    post_twitter_link,
    post_linkedin_link,
    post_pinterest_link,
    post_views_count
  );

module.exports = {
  get_data,
  post_get_one_data,
  filter_by_category_data,
  post_data,
  delete_data,
  edit_data,
  insert_category
};
