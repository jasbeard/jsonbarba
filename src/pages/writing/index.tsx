import { allWritings, Writing } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

function WritingPreview(post: Writing) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}

const WritingPage = () => {
  const posts = allWritings.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  return (
    <div>
      This is writing page
      {posts.map((post, idx) => (
        <WritingPreview key={idx} {...post} />
      ))}
    </div>
  )
}

export default WritingPage;