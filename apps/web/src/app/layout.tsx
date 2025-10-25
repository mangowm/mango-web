import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "MangoWC",
	alternateName: "Mango Window Compositor",
	description:
		"MangoWC is a lightweight, high-performance Wayland compositor built on dwl, designed for speed, flexibility, and a modern, customizable desktop experience.",
	applicationCategory: "DesktopEnhancementApplication",
	operatingSystem: "Linux",
	programmingLanguage: "C",
	softwareVersion: "latest",
	url: "https://mangowc.vercel.app",
	codeRepository: "https://github.com/DreamMaoMao/mangowc",
	downloadUrl: "https://github.com/DreamMaoMao/mangowc/releases",
	license: "https://github.com/DreamMaoMao/mangowc/blob/main/LICENSE",
	author: {
		"@type": "Person",
		name: "DreamMaoMao",
		url: "https://github.com/DreamMaoMao",
	},
	sameAs: [
		"https://github.com/DreamMaoMao/mangowc",
		"https://mangowc.vercel.app",
	],
	keywords: [
		"wayland compositor",
		"dwl",
		"linux window manager",
		"lightweight wm",
		"tiling compositor",
	],
};

export const metadata: Metadata = {
	metadataBase: new URL("https://mangowc.vercel.app"),
	title: {
		default: "MangoWC - Lightweight Wayland Compositor",
		template: "%s | MangoWC",
	},
	description:
		"MangoWC is a lightweight, high-performance Wayland compositor built on dwl, offering speed, flexibility, and a modern, customizable desktop experience.",
	keywords: [
		"wayland compositor",
		"window manager",
		"dwl",
		"linux",
		"lightweight wm",
	],
	openGraph: {
		title: "MangoWC - Lightweight Wayland Compositor",
		description:
			"Fast, flexible, and minimal — MangoWC is a modern Wayland compositor built on dwl for Linux power users.",
		url: "https://mangowc.vercel.app",
		siteName: "MangoWC",
		images: [
			{
				url: "/logo-1200x630.png",
				width: 1200,
				height: 630,
				alt: "MangoWC Wayland Compositor",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "MangoWC - Lightweight Wayland Compositor",
		description:
			"MangoWC is a fast, customizable Wayland compositor for Linux — smooth animations, flexible layouts, and advanced window control.",
		images: ["/logo-1200x630.png"],
		creator: "@DreamMaoMao",
	},
	icons: {
		icon: "/favicon.ico",
		apple: "/logo-192x192.png",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	alternates: { canonical: "https://mangowc.vercel.app" },
	category: "Software",
};

/**
 * ✅ Clean, accessible layout with Analytics + Providers
 * - SEO friendly
 * - JSON-LD injection
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="font-sans antialiased">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded z-50"
				>
					Skip to main content
				</a>
				<Providers>{children}</Providers>
				<Analytics />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</body>
		</html>
	);
}
