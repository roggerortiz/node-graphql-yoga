import { GraphQLServer } from 'graphql-yoga';
import dotenv from 'dotenv';
import { connectDB } from './database';
import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';

dotenv.config();

connectDB();

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

const port = process.env.PORT || 4000;

server.start({ port }, () => {
    console.log(`Server is running on port ${port}`);
});