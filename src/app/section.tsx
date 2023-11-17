import { PropsWithChildren } from "react";

export function Section({ children }: PropsWithChildren) {
  return (
    <section className="md:px-24 px-6 py-20 odd:bg-green-600 odd:bg-opacity-5 border-b border-gray-700">
      {children}
    </section>
  );
}
