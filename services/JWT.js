const jwt = require("jsonwebtoken");
const { FindUserById } = require("./../repository/UserRepo");
const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};
const VerifAccesToken = async (token) => {
  return jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    async (err, payload) => {
      if (err) {
        return { message: "There is no token !", status: "error", error: err };
      } else {
        const id = payload.id;
        const user = await FindUserById(id);
        if (user) {
          return { user, status: "success" };
        } else {
          return {
            message: "There is no token !",
            status: "error",
            error: null,
          };
        }
      }
    }
  );
};
module.exports = { createAccessToken, VerifAccesToken };
