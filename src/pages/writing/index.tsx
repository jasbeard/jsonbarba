import { MainLayout } from "@/components/MainLayout";
import { WritingPreview } from "@/components/writing";
import { allWritings } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { NextSeo } from "next-seo";
import { buildPageSeo } from "@/lib/seo";

const WritingPage = () => {
  const posts = allWritings.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  ); // sort desc by date

  return (
    <>
      <NextSeo
        {...buildPageSeo({
          title: "Writing — Life experiences, learnings, values, brain dumps",
          description:
            "Life experiences, learnings, values, brain dumps. Pretty much anything I can think of, and something worthy to share.",
          path: "/writing",
        })}
      />
      <MainLayout>
        <div
          className="mt-20 animate-fade-in text-sm lg:text-base"
          style={{
            animationFillMode: "both",
          }}
        >
          <h1 className="text-2xl lg:text-3xl text-gray-950 font-[550]">
            Writing
          </h1>
          <p className="max-w-2xl mt-4">
            Life experiences, learnings, values, brain dumps. Pretty much
            anything I can think of, and something worthy to share.
          </p>
          <div className="mt-8">
            {posts.map((post, idx) => (
              <WritingPreview key={idx} {...post} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default WritingPage;
