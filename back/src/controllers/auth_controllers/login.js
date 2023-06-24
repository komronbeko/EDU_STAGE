const { sign } = require("../../utils/jwt");
const { get_admin } = require("./model");

const login_controller = async(req, res)=>{
    try {
        const {name, password} = req.body;

        const findAdmin = await get_admin(name, password);

        if(!findAdmin) {
            return res.status(403).json({message: "Admin not found"});
        } 

        const token = sign(findAdmin.id);

        return res.status(200).json({message: "success", token});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {login_controller}