import Link from "next/link";
import { Button } from "./button";
import { SocialLink } from "./social-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yahya Eddhissa - Full Stack Web Solutions Engineer",
  description:
    "I'm a Software Engineer currently working as the CTO and co-founder of Orderedo. I'm very enthusiastic when it comes to Developer Experience and Design Patterns, while also emphasizing on Accessibility and good User Experience. I also share what I know on my personal blog and contribute to open-source projects.",
};

export default function Home() {
  return (
    <main>
      <div>
        <header className="flex md:justify-between justify-center items-center h-20 md:px-24 px-6 w-screen">
          <div className="flex items-center gap-2 flex-none">
            <div className="md:h-8 md:w-8 w-6 h-6 bg-green-800 rounded-full flex-none" />
            <div className="md:text-md">
              <span className="font-medium">YAHYA</span>{" "}
              <span className="font-bold">EDDHISSA</span>{" "}
              <span className="font-bold text-xl text-green-500">.</span>
            </div>
          </div>
          <nav className="md:flex items-center gap-8 hidden">
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
            <Link href="/">Blog</Link>
            <Button>Contact me</Button>
          </nav>
        </header>
        <div className="lg:w-2/3 md:w-3/4 md:px-24 px-6 md:pt-20 pt-14 text-center md:text-start">
          <h2 className="px-3 py-1.5 bg-green-950 rounded inline-block mb-3">
            Full Stack Web Solutions Engineer
          </h2>
          <h1 className="md:text-5xl text-3xl font-semibold mb-6">
            Design and Code Exceptional Online Experiences.
          </h1>
          <h3 className="text-sm text-gray-400 mb-10 md:block hidden">
            I&apos;m a Software Engineer currently working as the CTO and
            co-founder of <span className="underline text-white">Orderedo</span>
            . I&apos;m very enthusiastic when it comes to Developer Experience
            and Design Patterns, while also emphasizing on Accessibility and
            good User Experience. I also share what I know on my personal blog
            and contribute to open-source projects.
          </h3>
          <div className="flex md:gap-6 gap-4 items-center justify-center md:justify-normal">
            <div className="flex-none">
              <Button>View Projects</Button>
            </div>
            <div className="h-0 w-20 border-t border-gray-500" />
            <nav className="flex md:gap-3 gap-2">
              <SocialLink icon="brand-github" />
              <SocialLink icon="brand-linkedin" />
              <SocialLink icon="brand-dribbble" />
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
}
