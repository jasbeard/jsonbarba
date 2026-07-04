import type { NextSeoProps } from "next-seo";

export const SITE_URL = "https://jasonbarba.com";
export const SITE_NAME = "Jason Barba";
export const THEME_COLOR = "#f3f3f5";

export const DEFAULT_DESCRIPTION =
  "Software engineer building Capitalnotes. Writing about tech, side projects, travel, and life.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.jpg`;

export const defaultOpenGraph = {
  type: "website" as const,
  locale: "en_US",
  siteName: SITE_NAME,
  images: [
    {
      url: DEFAULT_OG_IMAGE,
      width: 400,
      height: 400,
      alt: SITE_NAME,
    },
  ],
};

export const defaultTwitter = {
  cardType: "summary_large_image" as const,
};

export function pageUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

function resolveImageUrl(image: string) {
  return image.startsWith("http") ? image : pageUrl(image);
}

type PageSeoOptions = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  type?: "website" | "article";
  noindex?: boolean;
  /** Use title as-is without the global title template (e.g. home page). */
  fullTitle?: boolean;
  article?: {
    publishedTime?: string;
    tags?: string[];
  };
};

export function buildPageSeo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image,
  imageWidth = 400,
  imageHeight = 400,
  type = "website",
  noindex,
  fullTitle,
  article,
}: PageSeoOptions): NextSeoProps {
  const url = pageUrl(path);
  const images = image
    ? [
        {
          url: resolveImageUrl(image),
          width: imageWidth,
          height: imageHeight,
          alt: title,
        },
      ]
    : defaultOpenGraph.images;

  return {
    title,
    ...(fullTitle && { titleTemplate: "" }),
    description,
    canonical: url,
    noindex,
    themeColor: THEME_COLOR,
    openGraph: {
      ...defaultOpenGraph,
      type,
      url,
      title,
      description,
      images,
      ...(article && { article }),
    },
    twitter: {
      ...defaultTwitter,
    },
  };
}
