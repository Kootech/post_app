import express from "express";

import { addUser } from "../controllers/user";

const router = express.Router();

//user routers
router.post("/", addUser);
router.put("/:id", updateUser);
router.get("/", getUsers);

export default router;
