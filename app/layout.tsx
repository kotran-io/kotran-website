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
						{children}
						<footer className="w-full flex items-center justify-center py-3">
							<p className="text-sm text-default-400 not-draggable">ⓒ 2023 Kotran</p>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
