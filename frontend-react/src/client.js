import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "m6yx174i",
	dataset: "production",
	apiVersion: "2022-02-01",
	useCdn: true,
	token:
		"skFaonQkoqhwJ2siatjaB90FUu1NqH7FBnBv83B7w2YZAuxUm7K9k2bMxsho6SDnUBW8olD88OtSJasnmxNLDjmJpObnRDq9VtP3IwswPqSrX4cHIJVKhIA3ht9BVTxAXLPT7uKg5JKEriDXE39hjibm5I7PvocjO8tY38aShZKWTo8Y6cqX",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
