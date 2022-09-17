const userModel = require("./../Models/User");

const FindUserById = async (id, callback) => {
try {
  const user = await userModel.findById(id).select("-password");
  if (!user) {
    callback({ error: true });
  } else {
    callback(user);
  }
}catch(error ) {
  callback({...error , error : true})
}
};
module.exports = {
  FindUserById,
};
