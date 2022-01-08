import { getMovies } from "./db";

const resolvers = {
    Query: {
        Movies: (_, {limit, rating}) => getMovies(limit, rating)
    },
};

export default resolvers;