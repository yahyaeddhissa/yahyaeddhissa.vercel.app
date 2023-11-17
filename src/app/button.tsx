import { PropsWithChildren } from "react";
import styles from "./button.module.css";

export function Button({ children }: PropsWithChildren) {
  return (
    <button
      className={
        "bg-green-700 rounded lg:px-5 px-3 lg:h-10 h-8 text-sm lg:text-base relative " +
        styles.Button
      }
    >
      {children}
    </button>
  );
}
