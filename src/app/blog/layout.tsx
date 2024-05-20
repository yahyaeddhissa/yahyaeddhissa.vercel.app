import { PropsWithChildren } from "react";

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
