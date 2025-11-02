export const Tags = ({ list }: { list: string[] }) => {
  if (!list.length) return null;
  return (
    <div className="flex space-x-2 pb-4 mb-2.5 text-xs md:text-sm gap-2 flex-wrap">
      {list.map((tag) => (
        <a
          key={tag}
          className="whitespace-nowrap !mx-0 py-1 px-4 font-medium border rounded-xl border-gray-500 text-gray-500 hover:bg-gray-200 cursor-pointer"
          href={`/writing/topic/${tag.toLowerCase()}`}
        >
          {tag}
        </a>
      ))}
    </div>
  );
};
