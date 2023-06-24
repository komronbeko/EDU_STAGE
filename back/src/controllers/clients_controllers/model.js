const { fetch } = require("../../utils/pg");

//-----------GET------->
const GET_SQL = "select * from clients";
const get_data = async () => fetch(GET_SQL);


//-----------POST------->
const POST_SQL = "insert into clients(name, image, text)values($1, $2, $3)";

const post_data = async ({ name, image, text }) =>
  fetch(POST_SQL, name, image, text);


//-----------DELETE------->
const DELETE_SQL = "delete from clients where id = $1";
const delete_data = async (id) => fetch(DELETE_SQL, id);


//-----------EDIT------->
const EDIT_SQL = "update clients set name = $1, text = $2 where id = $3";
const edit_data = async ({ name, text }, id) => fetch(EDIT_SQL, name, text, id);


module.exports = { get_data, post_data, delete_data, edit_data };
