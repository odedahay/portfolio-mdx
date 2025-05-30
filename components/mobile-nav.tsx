'use client'

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="w-10 px-0 sm:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle Theme</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
                <MobileLink onOpenChange={setOpen} href="/" className="flex items-center">
                    <Image 
                        className="h-8 w-auto" 
                        src="/images/roddahay-logo.svg" 
                        alt="Rod Dahay"
                        width={32}
                        height={32}
                    />
                </MobileLink>
                <div className="flex flex-col gap-3 mt-3">
                    <MobileLink onOpenChange={setOpen} href="/">
                        Home
                    </MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/portfolio">
                        Portfolio
                    </MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/about-me">
                        About Me
                    </MobileLink>
                    <MobileLink onOpenChange={setOpen} href="/contact">
                        Contact
                    </MobileLink>
                    <hr />
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
                        Github
                    </Link>
                    <Link target="_blank" rel="noreferrer" href={siteConfig.links.linkedin}>
                        LinkedIn
                    </Link>
                </div>
            </SheetContent>
        </Sheet>
    )
}

interface MobileLinkProps extends LinkProps {
    children: React.ReactNode;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

function MobileLink({
    href,
    onOpenChange,
    children,
    className,
    ...props
}: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link href={href} onClick={() => {
            router.push(href.toString());
            onOpenChange?.(false);
        }}
            className={className}
            {...props}
        >
            {children}
        </Link>)
}