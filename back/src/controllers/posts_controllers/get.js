const { get_data, post_get_one_data, filter_by_category_data } = require("./model");

const posts_get = async(req, res)=>{
    try {
        const data = await get_data();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

const post_get_one = async(req, res)=>{
    try {
        const {id} = req.params;

        const data = await post_get_one_data(id);

        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

const filter_by_category = async(req, res)=>{
    try {
        const {category} = req.params;


        const data = await filter_by_category_data(category);

        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}


module.exports = {posts_get, post_get_one, filter_by_category}