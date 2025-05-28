import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Rod",
    description: "Information about me",
  };


export default function AboutMe() {
    return (
        <div className="container mx-auto max-w-7xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:justify-between md:gap-8">

                <div className="flex-1 space-x-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">
                        About Me
                    </h1>
                </div>
                <hr className="my-8" />
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="min-w-48 max-w-48 flex flex-col gap-2">
                        <Avatar className="h-48 w-48">
                            <AvatarImage src="/avatar.png" alt={siteConfig.author} />
                            <AvatarFallback>Rodel</AvatarFallback>
                        </Avatar>
                        <h2 className="text-2xl font-bold text-center break-words">
                            {siteConfig.author}
                        </h2>
                        <p className="text-muted-foreground text-center break-words">
                            Web Designer and Developer
                        </p>
                    </div>
                    <div className="mt-5">
                        <div className="mt-4 space-y-6">
                            <article>
                                <p className="text-lg mb-6">
                                    As a dedicated UI Designer and Developer, I specialize in creating functional, user-centric designs that empower users to achieve their goals effortlessly. With a strong foundation in design principles, I craft visually appealing and intuitive interfaces that prioritize usability and accessibility. My passion lies in designing beautiful, seamless experiences that enhance and simplify everyday interactions.
                                </p>
                                <p className="text-lg">
                                    I am committed to continuous growth, constantly refining my skills and staying updated with the latest design trends. A collaborative team player at heart, I thrive in environments where I can work alongside others to bring innovative ideas to life. I am excited to contribute my expertise and creativity to your team, helping to deliver exceptional user experiences that make a meaningful impact.
                                </p>
                            </article>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}


