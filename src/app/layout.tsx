import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

const raleway = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Yahya Eddhissa - Full-Stack Software Engineer",
  description:
    "Yahya Eddhissa - Full-Stack software engineer. I'm very enthusiastic when it comes to Developer Experience and Design Patterns, while also emphasizing on Accessibility and good User Experience. I also share what I know on my personal blog and contribute to open-source projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body
        className={
          raleway.className +
          " tracking-wider font-medium w-screen text-sm lg:text-base overflow-x-hidden bg-gray-950"
        }
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-auto md:px-24 px-6 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
