const { delete_data } = require("./model");

const event_delete = async(req, res)=>{
    try {
        const {id} = req.params;

        await delete_data(id);
        
        res.status(200).json({message: "success"});
    } catch (error) {
        console.log(error);
        res.status(200).json({message: error.message})
    }
}

module.exports = {event_delete}