const { FindUserById } = require("../repository/UserRepo");

const getUser = async (req, res) => {
  FindUserById(req.params.id, (result) => {
    if (result.error) {
      return res.status(400).json({ message: "ERROR in Get User !" });
    }
    return res.status(200).json(result);
  });
};

module.exports = { getUser };
