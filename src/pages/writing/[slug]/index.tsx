import { format, parseISO } from "date-fns";
import { allWritings, Writing } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer2/hooks";
import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";
import type { MDXComponents } from "mdx/types";
import { GetStaticPropsContext } from "next";
import { calculateReadingTime } from "@/utils/lib";
import {
  AnchorWithLinkDisplay,
  Tags,
  ExternalLink,
  OptimizedMDXImage,
} from "@/components/writing";
import { Separator } from "@/components/Separator";
import Link from "next/link";

const CustomMdxComponents: MDXComponents = {
  img: (props) => (
    <OptimizedMDXImage
      src={props.src ?? ""}
      alt={props.alt ?? ""}
      title={props.title}
    />
  ),
  a: (props) => (
    <AnchorWithLinkDisplay {...props} className="underline-offset-2" />
  ),
  ExternalLink: (props) => (
    <ExternalLink
      {...props}
      className="underline underline-offset-2 decoration-gray-400 decoration-dashed italic"
    />
  ),
  SimpleLink: (props: { href?: string; children?: React.ReactNode }) => (
    <Link
      href={props.href ?? "/"}
      className="underline underline-offset-2 decoration-indigo-400"
    >
      {props.children}
    </Link>
  ),
  h2: (props) => <h2 {...props} className="text-2xl text-gray-950" />,
  ul: (props) => <ul {...props} className="list-['—']" />,
  li: (props) => <li {...props} className="ml-4 pl-2" />,
  strong: (props) => <strong {...props} className="font-[550]" />,
};

function getPrevNextPathsByDate(
  slug: string,
  writings: Writing[],
): {
  prev?: { title: string; path: string } | null;
  next?: { title: string; path: string } | null;
} {
  const parentOf = (p: string): string => {
    const idx = p.lastIndexOf("/");
    return idx === -1 ? "" : p.slice(0, idx);
  };

  const parent = parentOf(slug);

  // Siblings that share the same parent, sorted by date DESC (newest first)
  const siblings = writings
    .filter((w) => parentOf(w._raw.flattenedPath) === parent)
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const i = siblings.findIndex((w) => w._raw.flattenedPath === slug);
  if (i === -1) return {};

  // With newest-first:
  // - Previous = older = i + 1
  // - Next = newer = i - 1
  return {
    prev:
      i + 1 < siblings.length
        ? {
            title: siblings[i + 1].title,
            path: siblings[i + 1]._raw.flattenedPath,
          }
        : null,
    next:
      i - 1 >= 0
        ? {
            title: siblings[i - 1].title,
            path: siblings[i - 1]._raw.flattenedPath,
          }
        : null,
  };
}

export async function getStaticPaths() {
  // Get a list of valid writing paths.
  const paths = allWritings.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Find the post for the current page.
  const writing = allWritings.find(
    (post) => post._raw.flattenedPath === context.params?.slug,
  );

  const { prev, next } = getPrevNextPathsByDate(
    context.params?.slug as string,
    allWritings,
  );

  // Return notFound if the post does not exist.
  if (!writing) return { notFound: true };

  // Return the post as page props.
  return { props: { writing, prev, next } };
}

type FooterActions = { title: string; path: string };

const Content = ({
  writing,
  next,
  prev,
}: {
  writing: Writing;
  next: FooterActions;
  prev: FooterActions;
}) => {
  // const post = allWritings.find((post) => post._raw.flattenedPath === router?.query.slug) as Writing;
  const MDXContent = useMDXComponent(writing?.body.code);

  if (!writing) return null;

  return (
    <>
      <NextSeo
        title={writing.title}
        description={writing.bodyPreview}
        themeColor="dark"
      />
      <MainLayout>
        <div
          className="animate-fade-in"
          style={{
            animationFillMode: "both",
          }}
        >
          <article className="pb-8 mt-20 max-w-2xl">
            <div className="mb-10">
              <Tags list={writing.tags as string[]} />
              <h1 className="text-3xl font-semibold">{writing.title}</h1>
              <div className="flex mb-1 text-base text-gray-500">
                <time dateTime={writing.date}>
                  {format(parseISO(writing.date), "LLL. d, yyyy")}
                </time>
                <span>&nbsp;∙&nbsp;</span>
                <div>{`📖 ${calculateReadingTime(
                  writing.wordCount as number,
                )} mins read`}</div>
              </div>
            </div>
            <div className="*:mb-3 [&>*:last-child]:mb-0">
              <MDXContent components={CustomMdxComponents} />
            </div>
          </article>
          <Separator className="bg-gray-300 mb-4" />
          <div
            className={`flex mb-4 ${prev ? "justify-between" : "justify-end"}`}
          >
            {prev && (
              <Link
                href={prev.path}
                className={`flex gap-1 flex-col text-sm md:w-auto min-w-0 shrink-0 ${
                  next ? "w-[48%]" : "w-[90%]"
                }`}
              >
                <span className="text-gray-500">Previous</span>
                <span className="min-w-0 max-w-full truncate">
                  {prev?.title}
                </span>
              </Link>
            )}
            {next && (
              <Link
                href={next.path}
                className="flex gap-1 flex-col text-sm w-[48%] md:w-auto min-w-0 shrink-0"
              >
                <span className="text-right text-gray-500">Next</span>
                <span className="text-right min-w-0 max-w-full truncate">
                  {next?.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Content;
