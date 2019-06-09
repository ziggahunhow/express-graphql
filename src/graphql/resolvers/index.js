// import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import bookMarkResolvers from './bookMark';
import customResolvers from './custom';

// const customScalarResolver = {
//   Date: GraphQLDateTime,
// };

export default [
  // customScalarResolver,
  userResolvers,
  bookMarkResolvers,
  customResolvers
];
