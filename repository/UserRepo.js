const user = require("./../Models/User");

const FindUserById = async (id, callback) => {
  const user = await user.findById(id).select("-password");
  if (!user) {
    callback({ error: true });
  } else {
    callback(user);
  }
};
module.exports = {
  FindUserById,
};
