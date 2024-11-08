export default class Post {
	id: string;
	name: string;
	scientificName: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;

	constructor(
		id: string,
		name: string,
		scientificName: string,
		description: string,
		createdAt: Date,
		updatedAt: Date,
	) {
		this.id = id;
		this.name = name;
		this.scientificName = scientificName;
		this.description = description;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}
}
