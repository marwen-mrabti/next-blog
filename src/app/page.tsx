import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import MDXContent from "@/components/mdx-component";



function PostCard(post: Post) {
	return (
		<div className="rounded-lg bg-neutral-100 p-4 shadow-md">
			<h2 className="mb-1 text-xl">
				<Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
					{post.title}
				</Link>
			</h2>
			<h3 className="mb-2 text-sm text-neutral-500">{post.author ? `by ${post.author}` : ""}</h3>
			<time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
				{format(parseISO(post.date), "LLLL d, yyyy")}
			</time>
			<MDXContent code={post.body.code} />
		</div>
	);
}

export default function Home() {
	const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

	return (
		<div className="mx-auto flex max-w-7xl flex-col items-center justify-center py-8">
			<h1 className="mb-8 text-center text-2xl font-black">Blog Example</h1>
			<ul className="mx-auto grid max-w-4xl grid-cols-1 justify-items-center gap-4">
				{posts.map((post, idx) => (
					<li key={idx} className="w-2/3">
						<PostCard {...post} />
					</li>
				))}
			</ul>
		</div>
	);
}
