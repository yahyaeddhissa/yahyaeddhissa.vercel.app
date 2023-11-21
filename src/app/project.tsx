export function Project({
  title,
  description,
  imageUrl = "",
  tags,
  color,
}: {
  title: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  color: string;
}) {
  return (
    <div className={"bg-opacity-10 rounded relative overflow-hidden " + color}>
      <div className="md:flex items-start gap-4 md:px-7 px-4 md:py-4 py-3 mb-3">
        <div className="md:flex items-center gap-4">
          <h4 className="text-xl font-medium">{title}</h4>
          <div className="h-0 md:w-10 pt-2 md:pt-0 w-40 border-t border-gray-600 flex-none" />
        </div>
        <p className="font-normal line-clamp-3">{description}</p>
      </div>
      <div className="flex">
        <div className="ml-auto w-[90%]">
          <div className="md:flex hidden gap-2 text-xs font-normal mb-3">
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
            className="md:h-60 h-36 w-full bg-gray-300 bg-cover rounded-tl-md"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
