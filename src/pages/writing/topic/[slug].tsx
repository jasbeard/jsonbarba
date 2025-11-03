import { MainLayout } from "@/components/MainLayout";
import { useRouter } from "next/router";
import { allWritings } from "contentlayer/generated";
import { WritingPreview } from "@/components/writing";
import { compareDesc } from "date-fns";
import { NextSeo } from "next-seo";

function titleCase(tag: string) {
  var splitStr = tag?.toLowerCase().split(" ");
  for (var i = 0; i < splitStr?.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr?.join(" ");
}

const TopicPage = () => {
  const router = useRouter();
  const tag = titleCase(router.query?.slug as string);
  const sortedWritings = allWritings.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  const writingResult = sortedWritings.filter(
    (blog) => blog.tags?.includes(tag) && blog
  );
  return (
    <>
      <NextSeo
        title="Blog search"
        description="Life experiences, learnings, values, brain dumps. Pretty much anything I can think of, and something worthy to share."
        themeColor="dark"
      />
      <MainLayout>
        <div className="mt-20 max-w-3xl">
          <h1 className="text-3xl text-gray-950 font-[550]">{tag}</h1>
          <p className=" text-gray-600 mt-4">
            Life experiences, learnings, values, brain dumps. Pretty much
            anything I can think of, and something worthy to share.
          </p>
          <div className="mt-8">
            {writingResult.map((blog) => (
              <WritingPreview key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default TopicPage;
