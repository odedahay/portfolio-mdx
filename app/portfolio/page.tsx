import { posts } from "#site/content"
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sortPosts } from "@/lib/utils";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "This is my portfolio page",
  };


const POSTS_PER_PAGE = 5;

interface PortfolioPageProps{
    searchParams:{
        page?: string;
    }
}

export default async function PortfolioPage({searchParams}: PortfolioPageProps) {
    const awaitSearchParams = await searchParams;
    const currentPage = Number(awaitSearchParams?.page) || 1;
    const sortedPosts = sortPosts(posts.filter((post)=> post.published));
    const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

    const displayPosts = sortedPosts.slice(
        POSTS_PER_PAGE * (currentPage - 1),
        POSTS_PER_PAGE * currentPage
    );

    return (
        <div className="container mx-auto max-w-12xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Portfolio</h1>
                    <p className="text-xl text-muted-foreground">
                    Explore my portfolio to see my professional experience in action
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-5 mt-8">
                <div className="col-span-12 col-start-1 sm:col-span-8">
                    <hr className="my-8" />
                    {
                        displayPosts?.length > 0 ? (
                        <ul className="flex flex-col">
                           {
                                displayPosts.map((post) => {
                                const {slug, date, title, description, coverImage, tags} = post;
                                return (
                                    <li key={slug}>
                                        <PostItem 
                                            slug={slug} 
                                            date={date} 
                                            title={title} 
                                            description={description}
                                            coverImage={coverImage}
                                            tags={tags}
                                            />
                                    </li>
                                    );
                                })
                            }
                        </ul>) : (<p>Nothing to see here yet.</p>)
                    }
                    <QueryPagination totalPages={totalPages} className="justify-end mt-4"/>
                </div>
                <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
                    <CardHeader>
                        <CardTitle>Tags</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        Cards Here
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}