const { v4: uuid } = require("uuid");
const { post_data, categories_data, insert_category } = require("./model");

const posts_post = async (req, res) => {
  try {
    const values = req.body;

    const { admin_id } = req;
    const post_id = uuid();

    await insert_category(values.post_category, post_id);

    await post_data(values, admin_id, post_id);

    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { posts_post };
