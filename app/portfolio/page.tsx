import { posts } from "#site/content"
import { PostItem } from "@/components/post-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sortPosts } from "@/lib/utils";

export default async function PortfolioPage() {
    const sortedPosts = sortPosts(posts.filter((post)=> post.published));
    const displayPosts = sortedPosts;

    return (
        <div className="container mx-auto max-w-12xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Portfolio</h1>
                    <p className="text-xl text-muted-foreground">
                        My ramblings on all things web dev.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-8">
                <div className="col-span-12 col-start-1 sm:col-span-8">
                    <hr className="my-8" />
                    {
                        displayPosts?.length > 0 ? (
                        <ul className="flex flex-col">
                           {
                                displayPosts.map((post) => {
                                const {slug, date, title, description} = post;
                                return (
                                    <li key={slug}>
                                        <PostItem 
                                            slug={slug} 
                                            date={date} 
                                            title={title} 
                                            description={description} />
                                    </li>
                                    );
                                })
                            }
                        </ul>) : (<p>Nothing to see here yet.</p>)
                    }
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