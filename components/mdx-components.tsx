"use client";

import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
// import { cn } from "@/lib/utils";
import { MDXImage } from "./mdx-image";

const useMDXComponent = (code: string) => {
    const fn = new Function(code);
    return fn({ ...runtime }).default;
};

const components = {
    img: MDXImage,
    Callout,
    // h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    //     <h1 className={cn("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className)} {...props} />
    // ),
    // h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    //     <h2 
    //         className={cn(
    //             "mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight first:mt-0 subheading-anchor",
    //             className
    //         )} 
    //         {...props} 
    //     />
    // ),
    // h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    //     <h3 
    //         className={cn(
    //             "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight subheading-anchor",
    //             className
    //         )} 
    //         {...props} 
    //     />
    // ),
    // h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    //     <h4 
    //         className={cn(
    //             "mt-8 scroll-m-20 text-xl font-semibold tracking-tight subheading-anchor",
    //             className
    //         )} 
    //         {...props} 
    //     />
    // ),
    // a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    //     <a className={cn("no-underline hover:underline", className)} {...props} />
    // ),
};

interface MdxProps {
    code: string;
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />
}