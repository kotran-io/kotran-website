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
	links: {
		github: "https://github.com/kotran-io",
		discord: "https://discord.gg/cZFugtQj",
        sponsor: "https://patreon.com/Kotran"
	},
};
