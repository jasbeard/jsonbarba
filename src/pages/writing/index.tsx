import { MainLayout } from '@/components/MainLayout';
import { allWritings, Writing } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

function WritingPreview(post: Writing) {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h3 className="mb-1">
          <Link href={post.url} className="hover:text-indigo-400 text-base sm:text-lg">
            {post.title}
          </Link>
        </h3>
        <span className="text-gray-400 font-light text-sm md:text-base">{post.bodyPreview}</span>
      </div>
      <div className="mt-1">
        <time dateTime={post.date} className="text-gray-400 font-light text-sm md:text-base">
          {format(parseISO(post.date), 'LLL d, yyyy')}
        </time>
      </div>
    </div>
  );
}

const WritingPage = () => {
  const posts = allWritings.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <>
      <NextSeo
        title="Jason Barba | Writing"
        description="Life experiences, learnings, values, brain dumps. Pretty much anything I can think of, and something worthy to share."
        themeColor="dark"
      />
      <MainLayout>
        <div className="mt-8">
          <h1 className="font-semibold text-dark text-2xl sm:text-3xl dark:text-white">Writing</h1>
          <p className="max-w-4xl text-dark dark:text-white mt-4 font-light leading-8 tracking-[0.01em] text-base sm:text-lg">Life experiences, learnings, values, brain dumps. <br/>Pretty much anything I can think of, and something worthy to share.</p>
        </div>
        <div className="mt-12">
          {posts.map((post, idx) => (
            <WritingPreview key={idx} {...post} />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default WritingPage;