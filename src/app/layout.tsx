import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
			<head>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-FKDE4G4396"></Script>
				<Script>
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){
							dataLayer.push(arguments)
						}
						gtag('js', new Date());

						gtag('config', 'G-FKDE4G4396');
					`}
				</Script>
			</head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<body className={inter.className}>{children}</body>
		</html>
	);
}