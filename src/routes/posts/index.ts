import express from "express";
import PostService from "../../services/post_service";
import { PrismaClient } from "@prisma/client";

const postService = new PostService(new PrismaClient());
const router = express.Router();

router.get("/", async (req, res) => {
	const posts = await postService.findAll();

	res.send(posts);
});

router.get("/:id", async (req, res) => {
	const post = await postService.findById(req.params.id);

	if (post == null) {
		res.status(404).send();

		return;
	}

	res.send(post);
});

router.post("/", async (req, res) => {
	const post = await postService.create(req.body);

	res.status(201).send(post);
});

router.put("/", async (req, res) => {
	const post = await postService.update(req.body);

	res.send(post);
});

router.delete("/:id", async (req, res) => {
	await postService.delete(req.params.id);

	res.status(204).send();
});

export { router };
