import path from 'path';
import dotenv from 'dotenv';
import { connectDB } from './database';
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

dotenv.config();

connectDB();

const server = new GraphQLServer({
    typeDefs: path.join(__dirname, 'graphql/schema.graphql'),
    resolvers
});

server.start({ port: process.env.PORT || 4000 }, ({ port }) => {
    console.log(`Now browse to http://localhost:${port}`);
});