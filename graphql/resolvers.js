import { getMovies, getMovieById, getSuggestions } from "./db";

const resolvers = {
    Query: {
        Movies: (_, {limit, rating}) => getMovies(limit, rating),
        MovieById:(_, { id }) => getMovieById(id),
        Suggestions: (_, { id }) => getSuggestions(id),
    },
};

export default resolvers;