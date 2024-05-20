import { client } from "@/graphql-client";
import { gql } from "@urql/core";
import dayjs from "dayjs";
import Link from "next/link";

const POSTS_QUERY = gql`
  query PostQuery($page: Int!) {
    publication(host: "yahyaeddhissa.hashnode.dev") {
      postsViaPage(page: $page, pageSize: 10) {
        nodes {
          id
          cuid
          slug
          title
          views
        }
      }
    }
  }
`;

async function postsQuery() {
  const result = await client.query(POSTS_QUERY, { page: 1 });
  return result.data.publication.postsViaPage.nodes;
}

export default async function BlogPage() {
  const posts = await postsQuery();

  return (
    posts && (
      <div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Published
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Views
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post: any) => (
                      <tr
                        key={post.cuid}
                        className="odd:bg-white even:bg-gray-100 dark:odd:bg-gray-900 dark:even:bg-neutral-950"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {dayjs(post.publishedAt).format("LL")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {post.views}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
