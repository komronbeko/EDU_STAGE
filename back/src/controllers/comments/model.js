const { fetch } = require("../../utils/pg");

//-----------GET------->
const GET_SQL = "select * from comments where post_id = $1";
const get_data = async (post_id) => fetch(GET_SQL, post_id);

//-----------POST------->
const POST_SQL =
  "insert into comments(post_id, comment_author, comment_email, comment_subject, comment_message)values($1, $2, $3, $4, $5)";

const post_data = async (
  { comment_author, comment_email, comment_subject, comment_message },
  post_id
) =>
  fetch(
    POST_SQL,
    post_id,
    comment_author,
    comment_email,
    comment_subject,
    comment_message
  );

module.exports = { get_data, post_data };
