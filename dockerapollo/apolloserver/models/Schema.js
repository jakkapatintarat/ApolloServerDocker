const gql = require("graphql-tag");

//GraphQL Schema
const typeDefs = gql`
  type User {
    ID: String
    name: String
    age: Int
  }
  type Query {
    Users: [User]
  }
`;

module.exports = typeDefs