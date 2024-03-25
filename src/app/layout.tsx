import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MegaXL",
	description: "Loja online MegaXL",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" data-theme="valentine">
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
