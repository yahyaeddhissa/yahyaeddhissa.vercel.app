import { Client, cacheExchange, fetchExchange } from "@urql/core";

export const client = new Client({
  url: "https://gql.hashnode.com",
  exchanges: [fetchExchange],
  fetchOptions: {
    headers: {
      Authorization: process.env.HASHNODE_ACCESS_TOKEN as string,
    },
  },
});
