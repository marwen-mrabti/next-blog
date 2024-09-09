import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "next-blog",
	description: "This is a blog example with next.js and contentlayer"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} h-screen w-screen overflow-x-hidden`}>{children}</body>
		</html>
	);
}
