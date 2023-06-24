const { get_data } = require("./model");

const client_get = async(req, res)=>{
    try {
        const data = await get_data();
        
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(200).json({message: error.message})
    }
}

module.exports = {client_get}