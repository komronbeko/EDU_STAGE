const { edit_data } = require("./model");

const admin_edit = async(req, res)=>{
    try {
        const values = req.body;
        const {admin_id} = req;

        await edit_data(values, admin_id);

        res.status(200).json({message: "success"})
        
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = admin_edit;