import Link from "next/link";
import { Button } from "./button";
import { SocialLink } from "./_components/SocialLink";
import { Metadata } from "next";
import { Section } from "./section";
import { Fragment } from "react";
import { Skill } from "./skill";
import { Project } from "./project";
import { BlogPost } from "./blog-post";
import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "Yahya Eddhissa - Full Stack Web Solutions Engineer",
  description:
    "I'm a Software Engineer currently working as the CTO and co-founder of Orderedo. I'm very enthusiastic when it comes to Developer Experience and Design Patterns, while also emphasizing on Accessibility and good User Experience. I also share what I know on my personal blog and contribute to open-source projects.",
};

export default function Home() {
  return (
    <Fragment>
      <div className="lg:w-2/3 md:w-3/4 md:pb-20 md:pt-12 py-10 text-center md:text-start">
        <div className="mb-8">
          <h1 className="md:text-[40px] text-3xl font-semibold mb-2.5">
            Yahya Eddhissa
          </h1>
          <h2 className="font-semibold text-[18px]">
            Full-Stack Software Engineer
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 gap-4 items-center justify-center md:justify-normal">
          <div className="flex-none">
            <Button>View Projects</Button>
          </div>
          <div className="h-0 md:w-20 w-full border-t md:border-gray-500 border-gray-900" />
          <nav className="flex md:gap-3 gap-2">
            <SocialLink icon="brand-github" />
            <SocialLink icon="brand-linkedin" />
            <SocialLink icon="brand-stackoverflow" />
            <SocialLink icon="brand-dribbble" />
            <SocialLink icon="brand-reddit" />
          </nav>
        </div>
      </div>
      {/* <main>
        <Section
          title="What I do best"
          description="I have more than 2 years of experience building web platforms and
            services for clients all over the world. This work involves many
            technical skillsets and knowledge summarized below."
        >
          <div className="grid md:grid-cols-3 gap-10">
            <Skill
              title="Full Stack Web Development"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti, quod odit odio, iste modi totam excepturi nemo recusandae culpa saepe officiis harum voluptatem maiores eveniet est eos quibusdam?"
              icon="world"
            />
            <Skill
              title="Software Architecture and Design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti, quod odit odio, iste modi totam excepturi nemo recusandae culpa saepe officiis harum voluptatem maiores eveniet est eos quibusdam?"
              icon="affiliate"
            />
            <Skill
              title="UX Design and Accessibility"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi corrupti, quod odit odio, iste modi totam excepturi nemo recusandae culpa saepe officiis harum voluptatem maiores eveniet est eos quibusdam?"
              icon="app-window"
            />
          </div>
        </Section>
        <Section
          title="Featured Projects"
          description="Below is a featued list of the most remarkable projects I built over
            the years. Some of them are open-source, some of them are not."
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Project
              title="Orderedo"
              description="Orderedo is a global product registry meant to provide accurate product information"
              tags={[
                "Data Entry and Management",
                "Discussions",
                "Collaboration",
              ]}
              color="bg-sky-600"
            />
            <Project
              title="Archade"
              description="Archade is a social network for architects and construction engineers, plus all building enthusiasts"
              tags={["Social Networking", "Discussions", "Sharing"]}
              color="bg-yellow-700"
            />
            <Project
              title="Accessor"
              description="Accessor is an open-source authentication and access management service for application of any scale"
              tags={["Access Management", "Permissions", "Authorization"]}
              color="bg-purple-600"
            />
            <Project
              title="Vortech"
              description="Vortech is a free and open-source no-code website development platform for startups and businesses of any size"
              tags={["No-Code", "Business", "Website Builder"]}
              color="bg-red-600"
            />
          </div>
        </Section>
        <Section>
          <div>
            <p className="text-sm mb-1">Let&apos;s Collaborate</p>
            <h4 className="text-4xl font-medium mb-6">
              Have Any Project In Mind?
            </h4>
            <Button>Contact Me</Button>
          </div>
        </Section>
        <Section
          title="Latest Blog Posts"
          description="Below is a featued list of the most remarkable projects I built over
            the years. Some of them are open-source, some of them are not."
        >
          <div className="grid md:grid-cols-2 gap-5">
            <BlogPost
              tags={["Typescript"]}
              title="Predictable Error Handling with Typescript - Part 1: The Result Class"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam libero officia ratione tenetur? Qui eveniet voluptate laudantium sunt officia ab voluptas similique, mollitia inventore ratione debitis sit ducimus repudiandae!"
            />
            <BlogPost
              tags={["Typescript"]}
              title="Predictable Error Handling with Typescript - Part 1: The Result Class"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam libero officia ratione tenetur? Qui eveniet voluptate laudantium sunt officia ab voluptas similique, mollitia inventore ratione debitis sit ducimus repudiandae!"
            />
            <BlogPost
              tags={["Typescript"]}
              title="Predictable Error Handling with Typescript - Part 1: The Result Class"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam libero officia ratione tenetur? Qui eveniet voluptate laudantium sunt officia ab voluptas similique, mollitia inventore ratione debitis sit ducimus repudiandae!"
            />
            <BlogPost
              tags={["Typescript"]}
              title="Predictable Error Handling with Typescript - Part 1: The Result Class"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam libero officia ratione tenetur? Qui eveniet voluptate laudantium sunt officia ab voluptas similique, mollitia inventore ratione debitis sit ducimus repudiandae!"
            />
          </div>
        </Section>
      </main> */}
    </Fragment>
  );
}
