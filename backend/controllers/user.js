import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import userModel from "../models/user.js";

export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name && !email && !password) {
    res.status(400).send(`add all the details`);
  }
  const userExist = await userModel.findOne({ email });

  if (userExist) {
    res.status(400).send(`user already exist`);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(404).send(`could not add user`);
  }
};

export const loginUser = async (req, res) => {
  try {
  } catch (error) {}
};

export const getUser = async (req, res) => {
  try {
  } catch (error) {}
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
