import { getMDXComponent, useMDXComponent } from "next-contentlayer2/hooks";

interface MdxProps {
	code: string;
}

const components = {
	h1: (props: any) => <h1 {...props} className="p-2 text-3xl font-bold text-blue-700" />,
	h2: (props: any) => <h2 {...props} className="p-2 text-2xl font-bold text-blue-400" />,
	h3: (props: any) => <h3 {...props} className="p-2 text-xl font-bold text-red-200" />,

	p: (props: any) => <p {...props} className="px-2 py-3 text-justify text-base text-neutral-500" />
};

export default function MDXContent({ code }: MdxProps) {
	const Content = useMDXComponent(code);

	return (
		<div className="">
			<Content components={components} />
		</div>
	);
}
