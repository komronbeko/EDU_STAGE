const { fetch } = require("../../utils/pg");


//-----------GET------->
const GET_SQL = "select * from events";
const get_data = async () => fetch(GET_SQL);


//-----------POST------->
const POST_SQL =
  "insert into events(title, description, image, date, time_from, time_to, location)values($1, $2, $3, $4, $5, $6, $7)";

const post_data = async ({
  title,
  description,
  image,
  date,
  time_from,
  time_to,
  location,
}) =>
  fetch(
    POST_SQL,
    title,
    description,
    image,
    date,
    time_from,
    time_to,
    location
  );


//-----------DELETE------->
const DELETE_SQL = "delete from events where id = $1";
const delete_data = async (id) => fetch(DELETE_SQL, id);


//-----------EDIT------->
const EDIT_SQL =
  "update events set title = $1, description = $2, date = $3, time_from = $4, time_to = $5, location = $6 where id = $7";

const edit_data = async (
  { title, description, date, time_from, time_to, location },
  id
) =>
  fetch(EDIT_SQL, title, description, date, time_from, time_to, location, id);



module.exports = { get_data, post_data, delete_data, edit_data };