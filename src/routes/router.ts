import { router as posts } from "./posts/index";

import express from "express";

const router = express.Router();

router.use("/posts", posts);

export default router;
