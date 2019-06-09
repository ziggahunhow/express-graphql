import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';

export default {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      // value sent to the client
      return value.getTime();
    },
    parseValue(value) {
      // value from the client (variables)
      return new Date(value);
    },
    parseLiteral(ast) {
      // value from the client (inline arguments)
      if (ast.kind === Kind.INT) {
        return new Date(ast.value); // ast value is always in string format
      }
      return null;
    }
  }),
  Query: {
    now: () => new Date()
  }
};
