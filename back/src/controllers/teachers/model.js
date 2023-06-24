const { fetch } = require("../../utils/pg");


//-----------GET------->
const GET_SQL = "select * from teachers";
const get_data = async () => fetch(GET_SQL);


//-----------POST------->
const POST_SQL =
"insert into teachers(teacher_name, teacher_image)values($1, $2)";

const post_data = async ({
  teacher_name,
  teacher_image
}) =>
  fetch(
    POST_SQL,
    teacher_name,
    teacher_image
  );


//-----------DELETE------->
const DELETE_SQL = "delete from teachers where teacher_id = $1";
const delete_data = async (id) => fetch(DELETE_SQL, id);


//-----------EDIT------->
const EDIT_SQL =
"update teachers set teacher_name = $1, teacher_image = $2 where teacher_id = $3";

const edit_data = async ({
  teacher_name,
  teacher_image
}, id) =>
  fetch(
    EDIT_SQL,
    teacher_name,
    teacher_image,
    id
  );

module.exports = { get_data, post_data, delete_data, edit_data };
