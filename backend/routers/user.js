import express from "express";

import { addUser, loginUser, getUser } from "../controllers/user.js";
const router = express.Router();

//user routers
router.post("/", addUser);
router.put("/:id", loginUser);
router.get("/", getUser);

export default router;
