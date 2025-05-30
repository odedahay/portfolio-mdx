import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Rod Dahay",
    description: "Information about Rod Dahay",
};


export default function AboutMe() {
    return (
        <div className="container mx-auto max-w-7xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:justify-between md:gap-8">

                <div className="flex-1 space-x-4">
                    <h1 className="inline-block text-3xl sm:text-5xl md:text-6xl font-semibold">
                        About Me
                    </h1>
                </div>
                <hr className="my-4" />
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="min-w-48 max-w-48 flex flex-col gap-2">
                        <Avatar className="h-48 w-48">
                            <AvatarImage src="/images/avatar.jpg" alt={siteConfig.author} />
                            <AvatarFallback>Rodel</AvatarFallback>
                        </Avatar>
                        <h2 className="text-2xl font-bold text-center break-words">
                            {siteConfig.author}
                        </h2>
                        <p className="text-muted-foreground text-center break-words">
                            Web Designer and Developer
                        </p>
                    </div>
                    <div className="mt-0">
                        <div className="mt-4 space-y-6">
                            <article className="font-light sm:text-xl mb-6">
                                <div>
                                    <div className="space-y-6">
                                        <p className="text-md">
                                            I’m a UI designer and developer passionate about crafting websites and creating interactive, user-friendly designs that leave a lasting impression.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-md font-bold">Core Expertise:</h3>
                                    <div className="mt-4 pl-2">
                                        <p className="font-bold text-md mb-2 dark:text-gray-200">HTML Email Mastery</p>
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                                            <li className="text-black dark:text-white">
                                                <span>Designed 500+ responsive email campaigns with 95%+ inbox render accuracy</span>
                                            </li>
                                            <li className="text-black dark:text-white">
                                                <span>Developed bulletproof templates for Salesforce Marketing Cloud/ExactTarget and Adobe Experience Manager</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 pl-2">
                                        <p className="font-bold text-md mb-2 dark:text-gray-200">UI/UX & Web Design</p>
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                                            <li className="text-black dark:text-white">
                                                <span>Craft intuitive interfaces and responsive websites focused on conversion optimization</span>
                                            </li>
                                            <li className="text-black dark:text-white">
                                                <span>Design user flows, wireframes, and full website mockups (Figma/Adobe XD)</span>
                                            </li>
                                            <li className="text-black dark:text-white">
                                                Website redesigns improving usability metrics by 30%+
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 pl-2">
                                        <p className="font-semibold text-md mb-2 dark:text-gray-200">
                                            Front-End Development - Designed and implemented internal system applications using:
                                        </p>
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                                            <li className="text-black dark:text-white">
                                                <span>Fully Functional Website:</span> Custom WordPress themes (PHP/ACF)
                                            </li>
                                            <li className="text-black dark:text-white">
                                                <span>Frontend Framework:</span> Angular/Next.js/Mitril JS with Tailwind CSS
                                            </li>
                                            <li className="text-black dark:text-white">
                                                <span>Backend:</span> PostgreSQL with Redis caching
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-4 pl-2">
                                        <p className="font-bold text-md mb-2 dark:text-gray-200">Creative Pursuits:</p>
                                        <ul role="list" className="list-disc space-y-2 pl-4 text-md">
                                            <li className="text-black dark:text-white">
                                                Wedding Photography - Freelance brand storytelling projects
                                            </li>
                                            <li className="text-black dark:text-white">
                                                Pyrography Art - Hobby in wooden artworks
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <div className="mt-4 space-y-6">
                                        <article className="text-md">
                                            <p className="  mb-6">
                                            I design simple, user-friendly interfaces that help people get things done easily. Combining good design with clear functionality, I create experiences that are both beautiful and easy to use.
                                            </p>
                                        </article>
                                    </div>
                                </div>
                    </article>
                </div>
            </div>

        </div>
            </div >
        </div >
    )

}


