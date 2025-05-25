import { format, parseISO } from 'date-fns';
import Link from "next/link";
import { Writing } from 'contentlayer/generated';

export const WritingPreview = (post: Writing) => {
  return (
    <div className="flex flex-col md:justify-between md:flex-row mb-8">
      <div>
        <h3 className="mb-1">
          <Link href={post.url} className="transition-all duration-500 hover:text-indigo-400 text-base sm:text-lg">
            {post.title}
          </Link>
        </h3>
        <span className="text-gray-400 font-light text-sm md:text-base">{post.bodyPreview}</span>
      </div>
      <div className="mt-1">
        <time dateTime={post.date} className="text-gray-400 font-light text-xs md:text-base">
          {format(parseISO(post.date), 'LLL. d, yyyy')}
        </time>
      </div>
    </div>
  );
}