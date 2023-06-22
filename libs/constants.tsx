import {DiscordIcon, GithubIcon} from "@/components/icons";

export const SITE_URL = "https://kotran.io";

export const communityAccounts = [
  {
    title: "Discord",
    description: "To get involved in the community, ask questions and share tips.",
    icon: <DiscordIcon className="text-[#7289DA]" size={32} />,
    href: "https://discord.gg/cZFugtQj",
    isExternal: true,
  },
  {
    title: "Github",
    description: "To report bugs, request features and contribute to the project.",
    icon: <GithubIcon className="text-[#333] dark:text-[#E7E7E7]" size={32} />,
    href: "https://github.com/kotran-io",
    isExternal: true,
  },
];