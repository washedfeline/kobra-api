import { PrismaClient } from "@prisma/client";
import Post from "../models/post";

export default class PostService {
	prisma: PrismaClient;

	constructor(prisma: PrismaClient) {
		this.prisma = prisma;
	}
	async create(post: Post): Promise<Post> {
		const createdPost = await this.prisma.post.create({
			data: {
				name: post.name,
				scientificName: post.scientificName,
				description: post.description,
			},
		});

		return createdPost;
	}

	async findAll(): Promise<Array<Post>> {
		const posts = await this.prisma.post.findMany();

		return posts;
	}

	async findById(id: string): Promise<Post | null> {
		const foundPost = await this.prisma.post.findUnique({
			where: {
				id: id,
			},
		});

		return foundPost;
	}

	async update(post: Post): Promise<Post> {
		const updatedPost = await this.prisma.post.update({
			where: { id: post.id },
			data: {
				name: post.name,
				scientificName: post.scientificName,
				description: post.description,
			},
		});

		return updatedPost;
	}

	async delete(id: string): Promise<void> {
		await this.prisma.post.delete({ where: { id: id } });
	}
}
