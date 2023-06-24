const {edit_data} = require("./model")

const teacher_edit = async(req, res)=>{
    try {
        const values = req.body;

        const {id} = req.params;
        console.log(id);

        await edit_data(values, id);

        res.status(200).json({message: "success"});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {teacher_edit}