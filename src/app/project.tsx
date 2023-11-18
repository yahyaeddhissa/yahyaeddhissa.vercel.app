export function Project({
  title,
  description,
  imageUrl = "",
  tags,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
}) {
  return (
    <div className="bg-sky-600 bg-opacity-10 rounded relative overflow-hidden">
      <div className="flex items-start gap-4 px-7 py-4 mb-3">
        <div className="flex items-center gap-4">
          <h4 className="text-xl font-medium">{title}</h4>
          <div className="h-0 w-10 border-t border-gray-500 flex-none" />
        </div>
        <p className="font-normal line-clamp-3">{description}</p>
      </div>
      <div className="flex">
        <div className="ml-auto w-[90%]">
          <div className="flex gap-2 text-xs font-normal mb-3">
            {tags.map((item) => (
              <div
                className="flex h-7 items-center px-4 bg-white bg-opacity-5 rounded-full"
                key={Math.random()}
              >
                {item}
              </div>
            ))}
          </div>
          <div
            className="h-60 w-full bg-sky-600 bg-cover rounded-tl-md"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
