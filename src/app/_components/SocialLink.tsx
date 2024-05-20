export function SocialLink({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center bg-gray-900 rounded-full h-8 w-8 lg:h-8 lg:w-8">
      <i className={`lg:text-xl text-xl ti ti-${icon}`} />
    </div>
  );
}
