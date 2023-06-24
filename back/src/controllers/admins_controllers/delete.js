const { delete_data } = require("./model");

const admin_delete =async(req, res)=>{
    try {
        const {id} = req.params;

        await delete_data(id);

        res.status(200).json({message: 'success'})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = admin_delete;