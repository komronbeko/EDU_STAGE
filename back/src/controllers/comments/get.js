const { get_data } = require("./model");

const comments_get = async(req, res)=>{
    try {
        const {post_id} = req.params;
    
        const data = await get_data(post_id);
        
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(200).json({message: error.message})
    }
}

module.exports = {comments_get}