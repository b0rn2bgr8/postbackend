const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

const Post = new GraphQLObjectType({
  name: "Post",
  description: "post type definition",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
      description: "ID of the post",
      resolve: post =>  post.id
    },
    title: {
      type: GraphQLString,
      description: "title of the Post",
      resolve: post => post.title
    },
    content: {
      type: GraphQLString,
      description: "content of the Post",
      resolve : post =>  post.content
    }
  }
});

module.exports = Post;
