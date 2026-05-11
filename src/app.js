const express = require("express");
const { ApolloServer } = require("@apollo/server");

const connectToMongoDb = require("./config/db.config.js");
const typeDefs = require("./modules/typeDefs.js");
const resolvers = require("./modules/resolvers.js");
const { expressMiddleware } = require("@as-integrations/express5");
const Auth = require("./middleware/auth.middleware.js");

const app = express();
const cors =require('cors')

app.use(express.json());

async function startApollo() {
    await connectToMongoDb();

    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });

    await server.start();
    app.use(
        "/graphql",
        cors(["http://localhost:5173"]),
        expressMiddleware(server, {
            context: (req) => {
                const user = Auth(req)
                return user;
            }
        })
    );
}

startApollo();

module.exports = app;