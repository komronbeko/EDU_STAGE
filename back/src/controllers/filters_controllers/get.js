const { categories_get_data, popular_posts_data } = require("./model");

const categories_get = async(req, res)=>{
    try {
        const data = await categories_get_data();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({message: error.message})
    }
};

const popular_posts = async(_, res)=>{
    try {
        const data = await popular_posts_data();
        
        res.status(200).json(data);
    } catch (error) {
        res.status(200).json({message: error.message}) 
    }
}


module.exports = {categories_get, popular_posts};