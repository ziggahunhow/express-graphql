import jwt from 'jsonwebtoken';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import db from '../../models';

export default app => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
      endpoint: '/graphql'
    },
    context: async ({ req }) => {
      const token = req.headers['x-token'];
      if (token) {
        try {
          const me = await jwt.verify(token, process.env.JWT_SECRET);
          return { me, db };
        } catch (e) {
          throw new Error('Your session expired. Sign in again.');
        }
      }
      return { db };
    }
  });
  server.applyMiddleware({ app });
};
