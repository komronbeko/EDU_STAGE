const { fetch, fetchOne } = require("../../utils/pg");

//-----------GET------->
const GET_SQL = "select * from admins";
const get_data = async () => fetch(GET_SQL);

//-----------GET-ONE------->
const GET_ONE_SQL = "select * from admins where admin_id = $1";

const get_one_data = async(admin_id)=> fetchOne(GET_ONE_SQL, admin_id);

//-----------POST------->
const FIND_SQL = "select * from admins where admin_name = $1 or admin_password = $2"

const find_admin = async({name, password})=>fetchOne(FIND_SQL, name, password);


const POST_SQL = "insert into admins(admin_name, admin_password, admin_status)values($1, $2, $3)";

const post_data = async ({ name, password, status }) =>
  fetch(POST_SQL, name, password, status);


//-----------DELETE------->
const DELETE_SQL = "delete from admins where id = $1";
const delete_data = async (id) => fetch(DELETE_SQL, id);


//-----------EDIT------->
const EDIT_SQL = "update admins set admin_name = $1, admin_image = $2,  admin_job = $3, admin_description = $4, admin_facebook_link = $5, admin_twitter_link = $6, admin_linkedin_link = $7, admin_pinterest_link = $8 where admin_id = $9";
const edit_data = async ({ admin_name, admin_image,  admin_job, admin_description, admin_facebook_link, admin_twitter_link, admin_linkedin_link, admin_pinterest_link}, admin_id) => fetch(EDIT_SQL, admin_name, admin_image,  admin_job, admin_description, admin_facebook_link, admin_twitter_link, admin_linkedin_link, admin_pinterest_link, admin_id);

module.exports = { get_data, get_one_data, post_data, find_admin, delete_data, edit_data };
