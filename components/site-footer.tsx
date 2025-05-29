import { siteConfig } from "@/config/site";
import { Mail } from "lucide-react";
import { Icons } from "./icons";

export function SiteFooter() {
    return (
        <footer>
            <div className="mb-6 mt-14 flex flex-col items-center">
                <div className="mb-3 flex space-x-4">
                    <a href={siteConfig.links.instagram} target="_blank" rel="noreferrer">
                        <span className="sr-only">Mail</span>
                        {/* <Mail className="h-8 w-8" /> */}
                        <Icons.instagram className="h-8 w-8" />
                    </a>
                    <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Icons.gitHub className="h-8 w-8" />
                    </a>
                    <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Icons.linkedIn className="h-8 w-8" />
                    </a>
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
                 © Rod Dahay 2025, All rights reserved.
                </div>
            </div>
        </footer>
    )
}