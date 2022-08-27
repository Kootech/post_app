import Jwt from "jsonwebtoken";

import userModel from "../models/user";

const validate = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = Jwt.verify(token, process.env.JWT_SECRET);
      console.log(decode);
      req.user = await userModel.findById(decode.id).select("-password");
      next();
    } catch (e) {
      res.status(401).send(`not authorized token not found`);
    }
  } else {
    res.status(401).send(`Not Authorized`);
  }
};

export default validate;
