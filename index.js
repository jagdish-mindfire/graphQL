const { ApolloServer } = require("apollo-server");
const gpl = require("graphql-tag");

const typeDefs = gpl`
    type Query {
    sayHi : String!,   
    }
`;
const resolvers = {
  Query: {
    sayHi: () => "Hello World !",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 5000 }).then((res) => {
  console.log(`Server ready at ${res.url}`);
});
