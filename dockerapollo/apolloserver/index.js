const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./models/Schema");
const resolvers = require('./resolvers');

//เชื่อมต่อฐานข้อมูล
require('./connDB');

//ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//Run ApolloServer
startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({url}) => {
    console.log("Server is running on :", url);
}).catch((err) => {
    console.log(err);
});
