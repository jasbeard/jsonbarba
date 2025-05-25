import { MainLayout } from '@/components/MainLayout';
import { allWritings, Writing } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

function WritingPreview(post: Writing) {
  return (
    <div className="flex justify-between mb-8">
      <div>
        <h2 className="mb-1">
          <Link href={post.url} className="hover:text-blue-400 text-xl">
            {post.title}
          </Link>
        </h2>
        <span className="text-gray-400 text-base">{post.bodyPreview}</span>
      </div>
      <div className="mt-1 text-base">
        <time dateTime={post.date} className="text-gray-400">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
    </div>
  );
}

const WritingPage = () => {
  const posts = allWritings.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <MainLayout>
      <div className="mt-8">
        <h1 className="font-semibold text-3xl tracking-[0.02em]">Writing</h1>
        <p className="mt-4 text-lg">Life experiences, learnings, values, brain dumps. <br/>Pretty much anything I can think of, and something worthy to share.</p>
      </div>
      <div className="mt-12">
        {posts.map((post, idx) => (
          <WritingPreview key={idx} {...post} />
        ))}
      </div>
    </MainLayout>
  );
}

export default WritingPage;