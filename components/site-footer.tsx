import { siteConfig } from "@/config/site";
import { Icons } from "./icons";

export function SiteFooter() {
    return (
        <footer>
            <div className="mb-6 mt-14 flex flex-col items-center">

                <div className="space-x-2 text-sm text-muted-foreground flex flex-col md:flex-row justify-between w-full max-w-6xl border-border border-b">

                    <div className="md:mb-8 pb-8">
                        <div className="flex flex-col">
                            <h4 className="text-lg font-medium uppercase text-blue-9">Follow me</h4>
                            <h5 className="mb-2 mt-0 text-sm">Find me on any of these platforms.</h5>
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
                        </div>

                    </div>
                    <div>
                        <div className="flex gap-16">
                            <div>
                                <h4 className="text-lg font-medium uppercase text-blue-9">Category</h4>
                                <ul>
                                    <li><a href="/tags/uxui-design--development" className="hover:underline">UX/UI Design & Development</a></li>
                                    <li><a href="/tags/graphic-design" className="hover:underline">Graphic Design</a></li>
                                    {/* <li><a href="/tags/graphic-design" className="hover:underline">Cross-Platform Apps</a></li> */}
                                    {/* <li><a href="/tags/logo" className="hover:underline">Logo Design</a></li> */}
                                    <li><a href="/tags/tech" className="hover:underline">Technology Solutions</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-medium uppercase text-blue-9">Navigation</h4>
                                <ul>
                                    <li><a href="/" className="hover:underline">Home</a></li>
                                    <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
                                    <li><a href="/about-me" className="hover:underline">About Me</a></li>
                                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="space-x-2 text-sm text-muted-foreground">© {new Date().getFullYear()} Rodel Dahay. All rights reserved.</div>
            </div>
        </footer>
    )
}