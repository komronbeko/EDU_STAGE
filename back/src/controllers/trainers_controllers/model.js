const { fetch } = require("../../utils/pg");


//-----------GET------->
const GET_SQL = "select * from trainers";
const get_data = async () => fetch(GET_SQL);


//-----------POST------->
const POST_SQL =
"insert into trainers(name, image, job, quote, facebook_link, twitter_link, linkedin_link, pinterest_link)values($1, $2, $3, $4, $5, $6, $7, $8)";

const post_data = async ({
  name,
  job,
  quote,
  facebook_link,
  twitter_link,
  linkedin_link,
  pinterest_link,
  image
}) =>
  fetch(
    POST_SQL,
    name,
    image,
    job,
    quote,
    facebook_link,
    twitter_link,
    linkedin_link,
    pinterest_link
  );


//-----------DELETE------->
const DELETE_SQL = "delete from trainers where id = $1";
const delete_data = async (id) => fetch(DELETE_SQL, id);


//-----------EDIT------->
const EDIT_SQL =
"update trainers set name = $1, job = $2, quote = $3, facebook_link = $4, twitter_link = $5, linkedin_link = $6, pinterest_link = $7 where id = $8";

const edit_data = async ({
  name,
  job,
  quote,
  facebook_link,
  twitter_link,
  linkedin_link,
  pinterest_link,
}, id) =>
  fetch(
    EDIT_SQL,
    name,
    job,
    quote,
    facebook_link,
    twitter_link,
    linkedin_link,
    pinterest_link,
    id
  );

module.exports = { get_data, post_data, delete_data, edit_data };
