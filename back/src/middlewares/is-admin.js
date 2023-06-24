const { verify } = require("../utils/jwt");

const is_admin = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(403).json({ message: "Admin not found" });
    }

    const verifyToken = verify(token);

    req.admin_id = verifyToken.payload;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = is_admin;
