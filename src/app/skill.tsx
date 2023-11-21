export function Skill({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="mb-1.5">
        <i className={`ti ti-world md:text-4xl text-3xl`} />
      </div>
      <h4 className="md:text-xl text-lg font-semibold mb-2">{title}</h4>
      <p className="md:text-sm text-xs font-normal text-gray-400 line-clamp-4">
        {description}
      </p>
    </div>
  );
}
