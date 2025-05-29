import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";

export default function Home() {

  const latestPosts = sortPosts(posts).filter((post) => post.published).slice(0, 5);

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
          Hi, I Design & Develop <span className="inline-block sm:block">Digital Experiences</span>
          </h1>
          <p className="max-w-[90rem] mx-auto text-muted-foreground sm:text-xl text-balance mb-5">
          I'm Rod Dahay, a passionate UI designer and developer. Explore my portfolio to see my professional work and innovative projects built with WordPress, React/Next.js, and Angular.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/portfolio"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View my Portfolio
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      {/* <div className="container mx-auto flex h-14 max-w-screen-2xl items-center"></div> */}
      <section className="container mx-auto max-w-6xl py-6 lg:py-10 flex flex-col space-y-6">
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Portfolio
        </h2>
        <ul className="flex flex-col">
        {latestPosts.map((post) => (
          <li key={post.slug} className="first:border-t first:border-border">
            <PostItem
              slug={post.slug}
              title={post.title}
              description={post.description}
              date={post.date}
              coverImage={post.coverImage}
              tags={post.tags}
            />
          </li>
        ))}
      </ul>
      </section>
     
    </>
  );
}
