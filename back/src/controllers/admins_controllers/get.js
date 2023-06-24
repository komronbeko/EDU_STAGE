const { get_data, get_one_data } = require("./model");

const admins_get = async(req, res)=>{
    try {
        const data = await get_data();
        
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(200).json({message: error.message})
    }
}

const admin_get_One = async(req, res)=>{
    try {
        const {admin_id} = req;

        const data = await get_one_data(admin_id);

        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {admins_get, admin_get_One};