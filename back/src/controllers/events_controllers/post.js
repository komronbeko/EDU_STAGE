const {v4: uuid} = require("uuid");

const {post_data} = require("./model")

const event_post = async(req, res)=>{
    try {
        const values = req.body;

        const {image} = req.files;

        const imageName = `${uuid()}.${image.mimetype.split("/")[1]}`;

        image.mv(`${process.cwd()}/uploads/${imageName}`);

        values.image = imageName;

        await post_data(values);

        res.status(201).json({message: "success"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {event_post}