export function BlogPost({
  title,
  description,
  date,
  readMinutes,
  tags,
}: {
  title: string;
  description: string;
  date?: Date;
  readMinutes?: number;
  tags: string[];
}) {
  return (
    <div className="rounded bg-gray-900 px-8 py-6">
      <div className="flex justify-stretch mb-3 gap-5 text-sm items-center">
        {tags.map((tag) => (
          <div
            key={Math.random()}
            className="h-7 flex items-center bg-sky-700 rounded-full px-4"
          >
            {tag}
          </div>
        ))}
        <div className="text-gray-400">29 April 2023</div>
        <div className="h-0 border-t border-t-gray-700 flex-auto"></div>
        <div className="text-gray-300">8 min read</div>
      </div>
      <h4 className="text-xl font-semibold line-clamp-2 mb-2">{title}</h4>
      <p className="line-clamp-2 text-sm text-gray-300 font-normal mb-4">
        {description}
      </p>
      <p className="text-green-500 underline underline-offset-4">Read more</p>
    </div>
  );
}
