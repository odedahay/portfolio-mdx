import { slug } from "github-slugger";
import Link from "next/link";
import { badgeVariants } from "./ui/badge";


interface TagProps{
    tag: string;
    current?: boolean;
    count?: number;
}

export function Tag({tag, current, count}: TagProps){
    return <Link className={badgeVariants({
        variant: current ? "default" : "secondary", 
        className: "no-underline rounded-md capitalize"
        }
    )} href={`/tags/${slug(tag)}`}>
        {tag} {count ? `(${count})` : null}
    </Link>
}