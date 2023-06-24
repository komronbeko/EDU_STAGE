const { admin_get } = require("./get");
const {post_data, get_data, find_admin} = require("./model")

const admin_post = async(req, res)=>{
    try {
        const values = req.body;

        const findAdmin = await find_admin(values);

        if(findAdmin){
            return res.status(400).json({message: "This username or password already exists"});
        }

        await post_data(values);

        res.status(201).json({message: "success"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {admin_post}