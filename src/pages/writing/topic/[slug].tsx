import { MainLayout } from "@/components/MainLayout";
import { WritingPreview } from "@/components/writing";
import { allWritings, Writing } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { NextSeo } from "next-seo";
import { GetStaticPropsContext } from "next";
import { buildPageSeo } from "@/lib/seo";
import { getAllTags, tagFromSlug, tagToSlug } from "@/lib/tags";

export async function getStaticPaths() {
  const paths = getAllTags().map((tag) => ({
    params: { slug: tagToSlug(tag) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug as string;
  const tag = tagFromSlug(slug);

  if (!tag) {
    return { notFound: true };
  }

  const writings = allWritings
    .filter((blog) => blog.tags?.includes(tag))
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return {
    props: {
      tag,
      slug,
      writings,
    },
  };
}

type TopicPageProps = {
  tag: string;
  slug: string;
  writings: Writing[];
};

const TopicPage = ({ tag, slug, writings }: TopicPageProps) => {
  return (
    <>
      <NextSeo
        {...buildPageSeo({
          title: tag,
          description: `Articles tagged "${tag}" — life experiences, learnings, values, and brain dumps.`,
          path: `/writing/topic/${slug}`,
        })}
      />
      <MainLayout>
        <div
          className="mt-20 max-w-2xl animate-fade-in text-sm lg:text-base"
          style={{
            animationFillMode: "both",
          }}
        >
          <h1 className="text-2xl lg:text-3xl text-gray-950 font-[550]">
            {tag}
          </h1>
          <p className=" text-gray-600 mt-4">
            Life experiences, learnings, values, brain dumps. Pretty much
            anything I can think of, and something worthy to share.
          </p>
          <div className="mt-8">
            {writings.map((blog) => (
              <WritingPreview key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default TopicPage;
