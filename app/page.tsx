import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {

  const latestPosts = sortPosts(posts).filter((post) => post.published).slice(0, 5);
  const featuredSlugs = [
    "portfolio/easyconnect-mobile",
    "portfolio/aquaforma-microsite",
    "portfolio/turn-by-turn-web",
  ];
  const featuredPosts = featuredSlugs
    .map((slug) => posts.find((post) => post.slug === slug && post.published))
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  return (
    <>
      <section className="space-y-6 pb-8 pt-0 md:pb-2">
        <div className="container mx-auto max-w-6xl text-center">
          {/* <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6">
          Hi, I Design & Develop <span className="inline-block sm:block">Digital Experiences</span>
          </h1> */}
          <Link
            href="/portfolio"
              target="_blank"
              rel="noreferrer"
          >
          <div className="relative left-1/2 mb-8 h-[1080px] w-screen -translate-x-1/2 overflow-hidden sm:h-[420px] md:h-[560px] lg:my-5 lg:h-[900px] lg:w-[calc(100vw-40px)]">
            <picture>
              <source
                media="(max-width: 719px)"
                srcSet="/images/Storyboard-portfolio-m.jpg"
              />
              <img
                src="/images/Storyboard-portfolio.jpg"
                alt="Storyboard portfolio banner"
                className="h-full w-full object-cover object-center"
              />
            </picture>
          </div>
          </Link>
            <p className="max-w-[90rem] mx-auto font-light sm:text-xl mb-10">
          I&apos;m Rod Dahay, a passionate UI designer and developer. Explore my portfolio to see my professional work and innovative projects built with WordPress, React/Next.js, and Angular.
          </p>
        </div>
      </section>
      <section className="px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
          <div className="w-full">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl md:text-[45px]">
              Featured Work
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-[24px]">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="flex h-full flex-col gap-6">
                <Link
                  href={`/${post.slug}`}
                  className="group block overflow-hidden bg-[#d9d9d9] rounded-lg"
                >
                  <div className="relative aspect-[373/300] w-full">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02] rounded-lg"
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 373px"
                        priority
                      />
                    ) : null}
                  </div>
                </Link>
                <div className="flex flex-1 flex-col gap-4 text-black">
                  <h2 className="text-2xl leading-tight tracking-[-0.02em]">
                    <Link href={`/${post.slug}`}>{post.title}</Link>
                  </h2>
                  {post.description ? (
                    <p className="text-base leading-7 text-black md:text-lg">
                      {post.description}
                    </p>
                  ) : null}
                </div>
                <Link
                  href={`/${post.slug}`}
                  className="inline-flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] text-[#fb64b6] transition-colors hover:text-pink-600"
                >
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
         
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/portfolio"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              View Current Portfolio
            </Link>
            <Link
              href="https://odedahay.github.io/assets/rodelio_dahay_portfolio.pdf"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              View Archive Portfolio
            </Link>
          </div>
      </section>
      {/* <div className="container mx-auto flex h-14 max-w-screen-2xl items-center"></div> */}
      <section className="container mx-auto max-w-6xl py-6 lg:py-10 flex flex-col space-y-6">
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-center">
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
