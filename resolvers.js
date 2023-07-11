const { books } = require("./db");

const Query = {
  books: (root, args, context) => books
};

module.exports = {
  Query
};
