const { verify } = require("../utils/jwt");
const { fetchOne } = require("../utils/pg");

const is_super_admin = async(req, res, next)=>{
    try {
        const token =
        req.headers["authorization"] &&
        req.headers["authorization"].split(" ")[1];

        const admin_id = (verify(token)).payload;

        const {status} = await fetchOne("select admin_status as status from admins where admin_id = $1", admin_id);

        if(status !== "super" || !token){
            return res.status(500).json({message: "You are not super admin!"})
        } 

        next()
        
    } catch (error) {
        res.status(500).json({message: "You are not admin"})
    }
}

module.exports = is_super_admin