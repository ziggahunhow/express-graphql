import { AuthenticationError, ForbiddenError } from 'apollo-server-express';

// export const isLoggedIn = resolverFunc => (parent, args, context) => {
//   if (!context.me) throw new AuthenticationError('Authentication failed');
//   return resolverFunc.apply(null, [parent, args, context]);
// };
// export const verifyUser = resolverFunc => (parent, args, { me, db }) => {
//   if (me.id !== args.id) throw new ForbiddenError('Permission Failed');
//   return resolverFunc.apply(null, [parent, args, { db }]);
// };

export const checkUserLogin = resolverFunc => (parent, args, context) => {
  if (!context.me) throw new AuthenticationError('Authentication failed');
  if (context.me.id !== args.id) throw new ForbiddenError('Permission Failed');
  return resolverFunc.apply(null, [parent, args, context]);
};
