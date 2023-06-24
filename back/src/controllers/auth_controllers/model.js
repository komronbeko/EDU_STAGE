const { fetch, fetchOne } = require("../../utils/pg")

const SQL = "select admin_id as id from admins where admin_name = $1 and admin_password = $2";

const get_admin = async(name, password)=>await fetchOne(SQL, name, password);

module.exports = {get_admin};