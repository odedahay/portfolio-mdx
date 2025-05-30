import { posts } from "#site/content";
import { notFound } from "next/navigation";

import "@/styles/mdx.css"
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MDXContent } from "@/components/mdx-components";
import { Tag } from "@/components/tags";

interface PostPageProps {
    params: {
        slug: string[];
    };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const post = await getPostFromParams(params);
    if (!post) {
        return {}
    }
    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set("title", post.title);

    return {
        title: post.title,
        description: post.description,
        authors: { name: siteConfig.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: `/api/og?${ogSearchParams.toString()}`,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
    };
}

async function getPostFromParams(params: PostPageProps["params"]) {
    const resolvedParams = await params;
    
    if (!resolvedParams?.slug) {
        return null;
    }
    
    const slug = resolvedParams.slug.toString();
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params);
  
    if (!post || !post.published) {
        notFound();
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2 text-3xl sm:text-5xl font-semibold">{post.title}</h1>
            <div className="flex gap-2 mb-2">
                {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
            </div>
            {post.description ? (<p className="text-xl mt-0 text-muted-foreground">{post.description}</p>) : null}
            <hr className="my-4" />
            <MDXContent code={post.body} />
            <a href="/portfolio" className="inline-block no-underline px-4 py-2 text-lg bg-pink-400 text-white rounded-lg text-md hover:bg-gray-200 hover:text-black transition"    
        >
            <div className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left-icon lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg> 
            Back to Portfolio List
            </div>
            
        </a>
        </article>
    );
}