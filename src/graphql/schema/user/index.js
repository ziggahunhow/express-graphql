import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    users: [User!]!
    user(id: ID!): User
    me: User
  }
  type Mutation {
    createUser(
      name: String
      userName: String!
      email: String!
      password: String!
    ): User!
    updateUser(id: ID!, name: String): [Int!]!
    deleteUser(id: ID!): Int!
    userLogin(email: String!, password: String!): Token!
  }
  type User {
    id: ID!
    name: String
    userName: String!
    email: String!
    password: String!
    bookmarks: [Bookmark!]!
  }
  type Token {
    token: String!
  }
`;
