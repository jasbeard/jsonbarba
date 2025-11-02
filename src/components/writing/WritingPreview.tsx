import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Writing } from "contentlayer/generated";

export const WritingPreview = (post: Writing) => {
  return (
    <Link
      href={post.url}
      className="flex flex-col md:justify-between md:flex-row mb-4 hover:bg-gray-200 p-4 rounded"
    >
      <div className="flex flex-col">
        <span>{post.title}</span>
        <span className="text-gray-500">{post.bodyPreview}</span>
      </div>
      <div className="mt-1 text-sm">
        <time dateTime={post.date} className="text-gray-500">
          {format(parseISO(post.date), "LL.dd.yyyy")}
        </time>
      </div>
    </Link>
  );
};
