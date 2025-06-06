"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image";

export function MainNav() {
    const pathname = usePathname();
    const isPortfolioPage = pathname === "/portfolio" || pathname.startsWith("/portfolio/");
    
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Image 
                    className="h-8 w-auto" 
                    src="/images/roddahay-logo.svg" 
                    alt="Rod Dahay"
                    width={32}
                    height={32}
                />
            </Link>
            <Link href="/portfolio"
                className={cn(
                    "text-md font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    isPortfolioPage ? "text-pink-500" : "text-foreground/60"
                )}>Portfolio
            </Link>
            <Link href="/about-me"
                className={cn(
                    "text-md font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/about-me" ? "text-pink-500" : "text-foreground/60"
                )}>About Me
            </Link>
            <Link href="/contact"
                className={cn(
                    "text-md font-medium transition-colors hover:text-primary hidden sm:inline-block",
                    pathname === "/contact" ? "text-pink-500" : "text-foreground/60"
                )}>Contact
            </Link>
        </nav>
    )
}