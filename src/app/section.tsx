import { PropsWithChildren } from "react";

export function Section({
  title,
  description,
  children,
}: PropsWithChildren<any>) {
  return (
    <section className="md:px-24 px-6 md:py-20 py-12 odd:bg-green-600 odd:bg-opacity-5 border-b border-gray-700">
      {title && (
        <div className="mb-3">
          <h3 className="md:text-4xl text-3xl font-semibold text-green-600 mb-1">
            {title}
          </h3>
          <div className="h-0 w-32 border-t-2 border-green-600" />
        </div>
      )}
      {description && (
        <p className="text-gray-300 md:mb-12 mb-9 text-xs md:text-sm">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
