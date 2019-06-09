export default {
  Query: {
    bookmarks: (parent, args, { db }) => db.Bookmark.findAll(),
    bookmark: (parent, { id }, { db }) => db.Bookmark.findByPk(id)
  },
  Mutation: {
    createBookmark: (parent, { UserId, title, url }, { db }) =>
      db.Bookmark.create({
        title,
        url,
        UserId
      }),
    updateBookmark: (parent, { id, title, url }, { db }, info) =>
      db.Bookmark.update(
        {
          title,
          url
        },
        {
          where: {
            id: id
          }
        }
      ),
    deleteBookmark: (parent, { id }, { db }, info) =>
      db.Bookmark.destroy({
        where: {
          id: id
        }
      })
  },
  Bookmark: {
    user: (parent, args, context, info) => parent.getUser()
  }
};
