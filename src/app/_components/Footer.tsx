import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex-none h-10 px-5 text-xs md:text-sm flex items-center justify-center">
      <div>
        &#169; 2023-2024. Made With Love By
        <Link href="/" className="text-green-600 underline ml-1">
          Yahya Eddhissa
        </Link>
        . All Rights Reserved
      </div>
    </footer>
  );
}
