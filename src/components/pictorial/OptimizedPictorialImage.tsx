"use client";

import { useState, useRef, useEffect } from "react";

type LayoutVariant = "landscape" | "portrait";

type OptimizedPictorialImageProps = {
  src: string;
  alt: string;
  layout: LayoutVariant;
  priority?: boolean;
  className?: string;
};

/**
 * Uses native img to avoid Next.js Image Optimization timeouts with external Vercel Blob URLs.
 * Matches OptimizedMDXImage pattern: skeleton, opacity transition, caption overlay.
 * Handles cached images where onLoad may not fire by checking img.complete.
 */
export function OptimizedPictorialImage({
  src,
  alt,
  layout,
  priority = false,
  className = "",
}: OptimizedPictorialImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let mounted = true;
    const img = imgRef.current;
    if (!img) return;

    if (img.complete && img.naturalWidth > 0) {
      queueMicrotask(() => {
        if (mounted) setIsLoaded(true);
      });
      return;
    }

    img
      .decode()
      .then(() => mounted && setIsLoaded(true))
      .catch(() => {});

    const fallback = setTimeout(() => {
      if (mounted && img.complete && img.naturalWidth > 0) setIsLoaded(true);
    }, 100);
    return () => {
      mounted = false;
      clearTimeout(fallback);
    };
  }, [src]);

  const captionOverlayClass =
    layout === "landscape"
      ? "absolute bg-white/60 ml-2 -mt-8 z-20 text-gray-950 backdrop-opacity-30 backdrop-blur-sm rounded-full transition-opacity duration-300"
      : "absolute bottom-3 bg-white/60 ml-2 z-20 text-gray-950 backdrop-opacity-30 backdrop-blur-sm rounded-full transition-opacity duration-300";

  const imgCommon = {
    ref: imgRef,
    src,
    alt,
    loading: priority ? ("eager" as const) : ("lazy" as const),
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    decoding: "async" as const,
    onLoad: () => setIsLoaded(true),
    className: `transition-opacity duration-300 ${
      isLoaded ? "opacity-100" : "opacity-0"
    }`,
  };

  if (layout === "landscape") {
    return (
      <span className={`relative block overflow-hidden rounded ${className}`}>
        {!isLoaded && (
          <span
            className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse min-h-[200px]"
            aria-hidden
          />
        )}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          {...imgCommon}
          alt={alt}
          width={1800}
          height={1061}
          sizes="(max-width: 768px) 100vw, 672px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
        <div
          className={`${captionOverlayClass} ${
            isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-xs py-1 px-2">
            <span>{alt}</span>
          </div>
        </div>
      </span>
    );
  }

  return (
    <span
      className={`relative block overflow-hidden aspect-[.662727] w-full ${className}`}
    >
      {!isLoaded && (
        <span
          className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse"
          aria-hidden
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        {...imgCommon}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block",
        }}
      />
      <div
        className={`${captionOverlayClass} ${
          isLoaded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-xs py-1 px-2">
          <span>{alt}</span>
        </div>
      </div>
    </span>
  );
}
