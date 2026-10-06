//exp:4 , set up a basic GraphQL API using express-graphql
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

// Define a schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// Define a resolver
const root = {
  message: () => {
    return 'Hello Students! Welcome to GraphQL API';
  },
};

// Create GraphQL endpoint
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface
  })
);

// Start Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/graphql');
});