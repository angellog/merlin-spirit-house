"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";

const components = {
  block: {
    normal: ({ children }: any) => (
      <p className="text-text-secondary leading-relaxed">{children}</p>
    ),
    h2: ({ children }: any) => (
      <h2 className="font-[family-name:var(--font-heading)] text-[clamp(1.5rem,3.5vw,2.5rem)] font-semibold text-text-primary leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-[family-name:var(--font-heading)] text-[clamp(1.1rem,2.5vw,1.6rem)] font-semibold text-gold-light">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gold-primary">
        {children}
      </h4>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="text-text-primary font-semibold">{children}</strong>
    ),
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        className="text-gold-primary hover:text-gold-light underline transition-colors"
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => {
      const src = urlFor(value).width(800).height(500).url()
      if (!src) return null;
      return (
        <figure className="my-8">
          <Image
            src={src}
            alt={value.alt || ""}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="mt-2 text-sm text-text-muted text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function PortableTextRenderer({
  value,
}: {
  value: any[];
}) {
  return <PortableText value={value} components={components} />;
}
