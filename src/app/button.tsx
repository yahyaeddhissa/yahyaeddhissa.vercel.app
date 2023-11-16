import { PropsWithChildren } from "react";
import styles from "./button.module.css";

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      className={"bg-green-700 rounded px-5 h-10 relative " + styles.Button}
    >
      {children}
    </button>
  );
}
