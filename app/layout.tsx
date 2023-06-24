import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: [
		"Kotran",
		"Translator",
		"Neural Machine Translator",
		"NMT",
	  ],
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
	manifest: "/manifest.json",
	creator: "Kotran Technology",
	viewport: "viewport-fit=cover, width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const footerText = "Powered by NextUI\nDeployed by Cloudflare\nCopyright ⓒ 2023 Kotran all rights reserved.";

	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
					<div className="relative flex flex-col" id="app-container">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3" style={{whiteSpace: "pre-line", textAlign: "center"}}>
							<p className="text-sm text-default-600 not-draggable">{footerText}</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
