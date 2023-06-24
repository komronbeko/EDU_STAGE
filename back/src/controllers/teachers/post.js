const {post_data} = require("./model")

const teacher_post = async(req, res)=>{
    try {
        const values = req.body;

        await post_data(values);

        res.status(201).json({message: "success"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {teacher_post}