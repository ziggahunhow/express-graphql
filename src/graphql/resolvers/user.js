import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { checkUserLogin } from './helpers';

const createToken = ({ id, email }) =>
  jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: '15d'
  });

export default {
  Query: {
    users: (parent, args, { db }) => db.User.findAll(),
    user: (parent, { id }, { db }) => db.User.findByPk(id),
    me: (parent, args, { db, me }) => {
      if (!me) throw new Error('Please log in first!');
      return db.User.findByPk(me.id);
    }
  },
  Mutation: {
    createUser: async (parent, { name, userName, email, password }, { db }) => {
      //! For a production ready code, do not settle for saltRounds less than 12.
      const saltRounds = process.env.NODE_ENV === 'development' ? 10 : 15;
      const hash = await bcrypt.hash(password, saltRounds);
      return db.User.create({
        name,
        userName,
        email,
        password: hash
      });
    },
    updateUser: checkUserLogin((parent, { id, name }, { me, db }) =>
      db.User.update({ name }, { where: { id } })
    ),
    deleteUser: checkUserLogin((parent, { id }, { db }, info) =>
      db.User.destroy({ where: { id } })
    ),
    userLogin: async (parent, { email, password }, { db }, info) => {
      const user = await db.User.findOne({ where: { email } });
      if (!user) throw new Error('Email Account Does Not Exist!');
      const validPw = await bcrypt.compare(password, user.password);
      if (!validPw) throw new Error('Password Invalid!');
      // temporary login fn
      return { token: await createToken({ id: user.id, email: user.email }) };
    }
  },
  User: {
    bookmarks: (parent, args, context, info) => parent.getBookmarks()
  }
};
