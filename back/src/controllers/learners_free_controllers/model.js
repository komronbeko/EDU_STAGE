const { fetch } = require("../../utils/pg");

//-----------GET------->
const GET_SQL = "select * from learners_no_money";
const get_data = async () => fetch(GET_SQL);


//-----------POST------->
const POST_SQL = "insert into learners_no_money(name, phone_number, email)values($1, $2, $3)";

const post_data = async ({ name, phone_number, email}) =>
  fetch(POST_SQL, name, phone_number, email);


module.exports = { get_data, post_data};
