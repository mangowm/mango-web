import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { siteConfig } from "./site";

export const gitConfig = {
  user: siteConfig.name,
  repo: "mango",
  branch: "main",
};

export const sourceGitConfig = {
  user: siteConfig.name,
  repo: "mango",
  branch: "main",
  docsPath: "docs",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <img src="/logo.svg" alt={siteConfig.name} className="w-5 h-5" />
          <span className="font-medium">{siteConfig.name}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    themeSwitch: { enabled: true },
  };
}
