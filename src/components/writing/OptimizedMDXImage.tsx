"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

/**
 * A tiny 10x10 gray pixel as base64 for blur placeholder.
 * Next.js will blur this automatically when using placeholder="blur".
 */
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQAD8Qn/2Q==";

type OptimizedMDXImageProps = Omit<ImageProps, "onLoad"> & {
  alt: string;
  title?: string;
};

/** Remote http(s) assets: use native <img> so dev/prod never hit `/_next/image` (avoids optimizer timeouts on Blob hosts). */
function isRemoteHttpUrl(src: ImageProps["src"]): src is string {
  return typeof src === "string" && /^https?:\/\//i.test(src);
}

export function OptimizedMDXImage({
  src,
  alt,
  title,
  className = "",
  ...rest
}: OptimizedMDXImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const remote = isRemoteHttpUrl(src);

  const shell = (
    <>
      <span className="relative block overflow-hidden rounded-xl mt-8">
        {!isLoaded && (
          <span
            className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse min-h-[200px]"
            aria-hidden
          />
        )}
        {remote ? (
          // eslint-disable-next-line @next/next/no-img-element -- Remote MDX URLs: avoid next/image so `/_next/image` cannot time out on Blob hosts
          <img
            src={src}
            alt={alt}
            title={title}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className={`rounded-xl transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <Image
            {...rest}
            src={src}
            alt={alt}
            title={title}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 672px"
            quality={82}
            loading="lazy"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className={`rounded-xl transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
            onLoad={() => setIsLoaded(true)}
          />
        )}
      </span>
      <span className="text-center text-xs my-2 text-gray-500 dark:text-gray-400">
        {alt}
      </span>
    </>
  );

  return <span className="flex flex-col">{shell}</span>;
}
