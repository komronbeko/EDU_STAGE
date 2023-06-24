const { fetch } = require("../../utils/pg");

//-----------GET------->
const GET_SQL = "select * from contacts";
const get_data = async () => fetch(GET_SQL);


//-----------POST------->
const POST_SQL = "insert into contacts(name, email, subject, message)values($1, $2, $3, $4)";

const post_data = async ({ name, email, subject, message }) =>
  fetch(POST_SQL, name, email, subject, message);


module.exports = { get_data, post_data};
