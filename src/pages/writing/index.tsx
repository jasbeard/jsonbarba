import { MainLayout } from "@/components/MainLayout";
import { WritingPreview } from "@/components/writing";
import { allWritings } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { NextSeo } from "next-seo";

const WritingPage = () => {
  const posts = allWritings.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  ); // sort desc by date

  return (
    <>
      <NextSeo
        title="Writing"
        description="Life experiences, learnings, values, brain dumps. Pretty much anything I can think of, and something worthy to share."
        themeColor="dark"
      />
      <MainLayout>
        <div className="mt-20">
          <h1 className="text-3xl">Writing</h1>
          <p className="max-w-4xl mt-4">
            Life experiences, learnings, values, brain dumps. Pretty much
            anything I can think of, and something worthy to share.
          </p>
        </div>
        <div className="mt-12">
          {posts.map((post, idx) => (
            <WritingPreview key={idx} {...post} />
          ))}
        </div>
      </MainLayout>
    </>
  );
};

export default WritingPage;
