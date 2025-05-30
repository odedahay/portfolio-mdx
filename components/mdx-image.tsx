"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface MDXImageProps {
  src: string;
  alt: string;
  title?: string;
}

export function MDXImage({ src, alt, title }: MDXImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span className="my-4 cursor-pointer block" onClick={() => setIsOpen(true)}>
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="rounded-lg"
          style={{ objectFit: "contain" }}
        />
        {title && <span className="mt-2 text-sm text-muted-foreground">{title}</span>}
      </span>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{ src }]}
        controller={{ closeOnBackdropClick: true }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.50)" } }}
        carousel={{ finite: true }}
        render={{ buttonPrev: () => null, buttonNext: () => null }}
      />
    </>
  );
} 