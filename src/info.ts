import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "./components/link-item";
import { Metadata } from "next";

export const info = {
  name: "Mitchell",
  avatar: "/avatar.png",
  description: "Hi there!",
};

export const pageMetadata: Metadata = {
  title: "Mitchell's Links",
  description: "Mitchell's profile of links.",
};

export const links: Link[] = [
  {
    title: "GitHub",
    url: "https://github.com/Creaous/self-hosted-linktree",
    icon: SiGithub,
  },
];
