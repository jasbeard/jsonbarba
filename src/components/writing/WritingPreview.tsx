import { format, parseISO } from "date-fns";
import Link from "next/link";
import { Writing } from "contentlayer/generated";

export const WritingPreview = (post: Writing) => {
  return (
    <Link
      href={post.url}
      className="flex flex-col md:justify-between md:flex-row hover:bg-gray-200 p-4 rounded md:-ml-4"
    >
      <div className="flex flex-col">
        <span className="text-gray-950">{post.title}</span>
        <span className="text-gray-600">{post.bodyPreview}</span>
      </div>
      <div className="mt-1 text-sm">
        <time dateTime={post.date} className="text-gray-600">
          {format(parseISO(post.date), "LL.dd.yyyy")}
        </time>
      </div>
    </Link>
  );
};
