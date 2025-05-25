import { MainLayout } from "@/components/MainLayout";
import { useRouter } from "next/router";
import { allWritings } from 'contentlayer/generated';
import { WritingPreview } from "@/components/writing";
import { compareDesc } from "date-fns";

function titleCase(tag: string) {
  var splitStr = tag?.toLowerCase().split(' ');
  for (var i = 0; i < splitStr?.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr?.join(' '); 
}

const TopicPage = () => {
  const router = useRouter();
  const tag = titleCase(router.query?.slug as string);
  const sortedWritings = allWritings.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const writingResult = sortedWritings.filter((blog) => blog.tags?.includes(tag) && blog)
  return (
    <MainLayout>
      <h1 className="font-semibold text-dark text-2xl sm:text-3xl dark:text-white">{tag}</h1>
      <p className="max-w-4xl text-dark dark:text-white mt-4 font-light leading-8 tracking-[0.01em] text-base sm:text-lg">Selecting a tag on the blog filters and displays all related post below.</p>
      <div className="mt-12">
        {writingResult.map((blog) => (
          <WritingPreview key={blog.title} {...blog} />
        ))}
      </div>
    </MainLayout>
  );
}

export default TopicPage;