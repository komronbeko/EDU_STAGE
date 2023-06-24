require("dotenv/config");

const {env} = process;

const config = {
    port: env.PORT,
    security_key: env.SECURITY_KEY,
    connection: env.CONNECTION_STRING,
    admin_password: env.ADMIN_PASSWORD
} 

module.exports = config