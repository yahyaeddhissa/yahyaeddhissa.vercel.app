import { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      className={
        "bg-green-800 font-medium rounded lg:px-4 px-3 lg:h-8 h-8 text-sm lg:text-sm relative border border-green-600"
      }
    >
      {children}
    </button>
  );
}
