import { getMovies } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies()
    // movie: (_, { id }) => getById(id)
  }
  // Mutation: {
  //   addMovie: (_, { name, age }) => addMovie(name, age),
  //   deleteMovie: (_, { id }) => deleteMovie(id)
  // }
};

export default resolvers;
