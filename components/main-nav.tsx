"use client"

import Link from "next/link"
import { Icons } from "./icons"
import { siteConfig } from "@/config/site"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function MainNav() {
    const pathname = usePathname();
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo className="h-6 w-6" />
                <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <Link href="/portfolio"
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/portfolio" ? "text-foreground" : "text-foreground/60"
                )}>Portfolio
            </Link>
            <Link href="/about-me"
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/about-me" ? "text-foreground" : "text-foreground/60"
                )}>About Me
            </Link>
            <Link href="/contact"
                className={cn(
                    "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/contact" ? "text-foreground" : "text-foreground/60"
                )}>Contact
            </Link>
        </nav>
    )
}