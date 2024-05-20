import { client } from "@/graphql-client";
import { gql } from "@urql/core";
import dayjs from "dayjs";
import { Ref } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

const POST_QUERY = gql`
  query PostQuery($slug: String!) {
    publication(host: "yahyaeddhissa.hashnode.dev") {
      post(slug: $slug) {
        title
        views
        publishedAt
        content {
          markdown
        }
      }
    }
  }
`;

async function postQuery(slug: string) {
  const result = await client.query(POST_QUERY, { slug });
  return result.data.publication.post;
}

export default async function BlogPostPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await postQuery(slug);
  return (
    post && (
      <div className="px-36">
        <header className="mb-8">
          <h1 className="text-2xl font-semibold mb-1.5">{post.title}</h1>
          <div className="flex font-normal text-sm text-gray-400 mb-3">
            <div className="flex gap-4">
              <div>Yahya Eddhissa</div>
              <span>|</span>
              <div>
                {dayjs(post.publishedAt).format("LL")} (
                {dayjs(post.publishedAt).fromNow()})
              </div>
            </div>
            <div className="ml-auto">{post.views} views</div>
          </div>
          <div className="flex gap-2 mb-2">
            <span className="bg-sky-600/30 flex items-center px-3 rounded-full h-5 text-xs font-medium">
              Typescript
            </span>
            <span className="bg-red-600/30 flex items-center px-3 rounded-full h-5 text-xs font-medium">
              NestJS
            </span>
          </div>
        </header>
        <div className="font-normal text-lg text-gray-200">
          <ReactMarkdown components={renderers}>
            {post.content.markdown}
          </ReactMarkdown>
        </div>
      </div>
    )
  );
}

const renderers: Partial<Components> = {
  code(props) {
    const { ref, children, className, node, ...rest } = props;
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <div className="relative">
        <div className="absolute right-0 m-2 text-xs font-medium h-5 flex items-center justify-center px-2 rounded bg-sky-600/50">
          {match[1]}
        </div>
        <div className="rounded-md border-sky-800 bg-sky-600/5 border scrollbar-thumb-sky-700 scrollbar-thumb-rounded-full scrollbar-track-transparent scrollbar-thin overflow-x-auto overflow-y-hidden my-2 text-base">
          <ReactSyntaxHighlighter
            {...rest}
            ref={ref as Ref<ReactSyntaxHighlighter>}
            PreTag="div"
            language={match[1]}
            style={nightOwl}
            customStyle={{
              margin: 0,
              padding: "1rem 1.6rem",
              overflow: "visible",
              background: "transparent",
            }}
          >
            {String(children).replace(/\n$/, "")}
          </ReactSyntaxHighlighter>
        </div>
      </div>
    ) : (
      <code {...rest} className={className}>
        {children}
      </code>
    );
  },
  p(props) {
    return <p className="my-5" {...props} />;
  },
};
