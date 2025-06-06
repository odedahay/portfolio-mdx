
import { posts } from "@/.velite";
import { Tag } from "@/components/tags";
import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tags",
    description: "Topic that I've worked previously"
};

export default async function TagsPage() {
    const tags = getAllTags(posts);
    const sortedTags = sortTagsByCount(tags)

    return (
        <div className="container mx-auto max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Tags</h1>
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-wrap gap-2 [&_a]:text-[16px]">
                {sortedTags?.map((tag) => (
                    <Tag tag={tag} count={tags[tag]} key={tag} />
                ))}
            </div>

        </div>
    );
}