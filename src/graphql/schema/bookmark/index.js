import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    bookmarks: [Bookmark!]!
    bookmark(id: ID!): Bookmark!
  }
  extend type Mutation {
    createBookmark(title: String!, url: String!, UserId: ID!): Bookmark!
    updateBookmark(id: ID!, url: String!, title: String!): [Int!]!
    deleteBookmark(id: ID!): Int!
  }
  type Bookmark {
    id: ID!
    title: String!
    url: String!
    UserId: ID!
    user: User!
  }
`;
