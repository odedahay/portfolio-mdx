import { posts } from "#site/content";
import { notFound } from "next/navigation";

import "@/styles/mdx.css"
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { MDXContent } from "@/components/mdx-components";

interface PostPageProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: PostPageProps["params"]) {
    if (!params?.slug) {
        return null;
    }
    
    const slug = params.slug.join("/");
    const post = posts.find((post) => post.slugAsParams === slug);
    return post;
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
    // Ensure params are properly awaited
    const resolvedParams = await Promise.resolve(params);
    const post = await getPostFromParams(resolvedParams);
  
    if (!post || !post.published) {
        notFound();
    }

    return (
        <article className="container py-6 prose dark:prose-invert max-w-3xl mx-auto">
            <h1 className="mb-2">{post.title}</h1>
            {post.description ? (<p className="text-xl mt-0 text-muted-foreground">{post.description}</p>) : null}
            <hr className="my-4" />
            <MDXContent code={post.body} />
        </article>
    );
}