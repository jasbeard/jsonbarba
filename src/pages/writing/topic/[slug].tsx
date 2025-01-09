import { MainLayout } from "@/components/MainLayout";
import { useRouter } from "next/router";
import { allWritings } from 'contentlayer/generated';
import { WritingPreview } from "@/components/writing/WritingPreview";

function titleCase(tag: string) {
  var splitStr = tag?.toLowerCase().split(' ');
  for (var i = 0; i < splitStr?.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr?.join(' '); 
}


const TopicPage = () => {
  const router = useRouter();
  const tag = titleCase(router.query?.slug as string)
  const writingResult = allWritings.filter((blog) => blog.tags?.includes(tag) && blog)
  return (
    <MainLayout>
      <h1 className="font-semibold text-dark text-2xl sm:text-3xl dark:text-white">{tag}</h1>
      <div className="mt-12">
        {writingResult.map((blog) => (
          <WritingPreview key={blog.title} {...blog} />
        ))}
      </div>
    </MainLayout>
  );
}

export default TopicPage;