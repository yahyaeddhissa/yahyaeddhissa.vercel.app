export function SocialLink({ icon }: { icon: string }) {
  return (
    <div className="flex items-center justify-center bg-gray-900 rounded-full h-11 w-11">
      <i className={`text-3xl ti ti-${icon}`} />
    </div>
  );
}
