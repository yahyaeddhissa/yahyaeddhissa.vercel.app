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
        <i className={`ti ti-world text-4xl`} />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm font-normal text-gray-400 line-clamp-4">
        {description}
      </p>
    </div>
  );
}
