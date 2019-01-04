const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLList
} = require("graphql");

const Post = require("./Post");
const PostModel = require("../model/Post");

const Query = new GraphQLObjectType({
  name: "Query",
  description:"Query interface for our Blog",
  fields: {
    post: {
      type: Post,
      description:"query to return a single post",
      args: {
        id: {type: new GraphQLNonNull(GraphQLID) }
      },
      resolve: (_, args) => {
        return PostModel.getPost(args.id);
      }
    },
    posts: {
      type: new GraphQLList(Post),
      description: "query to return list of blog post",
      args: {},
      resolve: (_, args) => {
        return PostModel.getPosts();
      }
    }
  }
});

module.exports = Query;
