export function SocialLink({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center bg-gray-900 rounded-full h-9 w-9 lg:h-11 lg:w-11">
      <i className={`lg:text-3xl text-2xl ti ti-${icon}`} />
    </div>
  );
}
