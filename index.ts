import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { resolvers } from "./actions";
import { typeDefs } from "./schema";

// gql setup
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

// server ready
console.log(`🚀 Server ready at port ${url}`);
