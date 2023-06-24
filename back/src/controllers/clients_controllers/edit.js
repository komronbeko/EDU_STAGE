const {edit_data} = require("./model")

const client_edit = async(req, res)=>{
    try {
        const values = req.body;
        
        const {id} = req.params;

        await edit_data(values, id);

        res.status(200).json({message: "success"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {client_edit}