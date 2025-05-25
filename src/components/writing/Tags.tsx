export const Tags = ({ list }: { list: string[] }) => {
  if (!list.length) return null;
  return (
    <div className="flex space-x-2 py-4 mb-2.5 text-xs md:text-sm">
      {list.map((tag) => (
        <a
          key={tag}
          className="py-1 px-4 font-medium border rounded-xl border-gray-500 text-gray-200 transition-all duration-500 hover:bg-indigo-500 cursor-pointer"
          href={`/writing/topic/${tag.toLowerCase()}`}
        >
          {tag}
        </a>
      ))}
    </div>
  );
}