import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-FKDE4G4396"></script>
				<script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){
							dataLayer.push(arguments)
						}
						gtag('js', new Date());

						gtag('config', 'G-FKDE4G4396');
					`}
				</script>
			</Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<body className={inter.className}>{children}</body>
		</html>
	);
}
