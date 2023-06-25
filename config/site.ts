export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Kotran",
	description: "Break the limits of language, regain your freedom",
	navItems: [
		{
			label: "Docs",
			href: "/docs",
		},
		{
			label: "Hub",
			href: "/hub",
		},
		{
			label: "Feedback",
			href: "/feedback",
		}
	],
	navMenuItems: [
		{
			label: "Docs",
			href: "/docs",
			isExternal: false,
		},
		{
			label: "Hub",
			href: "/hub",
			isExternal: false,
		},
		{
			label: "Feedback",
			href: "/feedback",
			isExternal: false,
		},
		{
			label: "Discord",
			href: "https://discord.gg/cZFugtQj",
			isExternal: true,
		},
		{
			label: "GitHub",
			href: "https://github.com/kotran-io",
			isExternal: true,
		},
		{
			label: "Sponsor",
			href: "https://patreon.com/Kotran",
			isExternal: true,
		}
	],
	links: {
		github: "https://github.com/kotran-io",
		discord: "https://discord.gg/cZFugtQj",
        sponsor: "https://patreon.com/Kotran"
	},
};
