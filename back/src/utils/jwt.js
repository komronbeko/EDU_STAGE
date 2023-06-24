const jwt = require("jsonwebtoken");
const config = require("../../config");

const verify = (payload) =>  jwt.verify(payload, config.security_key);
const sign = (payload) =>  jwt.sign({payload}, config.security_key);


module.exports = {
    sign,
    verify
}
