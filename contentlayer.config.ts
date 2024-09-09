import { defineDocumentType, makeSource } from "contentlayer2/source-files";

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: `**/*.mdx`,
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		author: { type: "string", required: false },
		date: { type: "date", required: true },
		summary: { type: "string", required: true }
	},
	computedFields: {
		url: { type: "string", resolve: (post) => `posts/${post._raw.flattenedPath}` }
	}
}));

export default makeSource({ contentDirPath: "src/blog-posts", documentTypes: [Post] });
