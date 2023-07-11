/*
apollo-server-fastify needs fastify@2 => check package.json
*/
const fastify = require("fastify");
const { ApolloServer, gql } = require("apollo-server-fastify");
const fs = require("fs");

const port = 4000;

const app = fastify();

// Construct a schema, using GraphQL schema language
const typeDefs = gql(fs.readFileSync("./schema.graphql", { encoding: "utf8" }));

// Provide resolver functions for your schema fields
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  resolvers,
});

app.get("/", (req, res) => {
  res.send("Welcome to my graphql api");
  resolvers;
});

app.get("/", (req, res) => {
  res.send("Welcome to my nodejs-fastify with nodejs-graphql api.  rrr");
});
app.register(server.createHandler());
app.listen(port, () => console.info(`Server started on port ${port}`));
