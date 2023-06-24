const {post_data} = require("./model")

const comments_post = async(req, res)=>{
    try {
        const values = req.body;

        const {post_id} = req.params;

        await post_data(values, post_id);

        res.status(201).json({message: "success"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {comments_post}