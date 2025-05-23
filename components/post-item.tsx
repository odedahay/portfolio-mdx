import { cn, formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

interface PostItemProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
    coverImage?: string;
}

export function PostItem({ slug, title, description, date, coverImage }: PostItemProps) {
    return (
        <article className="flex flex-row gap-6 border-border border-b py-3">
            {coverImage && (
                <div className="relative aspect-[16/9] w-1/3 min-w-[200px] overflow-hidden rounded-lg">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                    />
                </div>
            )}
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <h2 className="text-2xl font-bold">
                        <Link href={slug}>{title}</Link>
                    </h2>
                    <div className="mt-2 text-muted-foreground">
                        {description}
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <dl>
                        <dt className="sr-only">Published On</dt>
                        <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                    </dl>
                    <Link href={slug} className={cn(buttonVariants({ variant: "link" }), "py-0")}>
                        Read More →
                    </Link>
                </div>
            </div>
        </article>
    )
}