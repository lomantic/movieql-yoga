import { People, getById, addPerson, deleteById } from "./db";

const resolvers = {
    Query: {
        People: () => People,
        Person: (_, { id }) => (getById(id)),
    },
    Mutation: {
        addPerson: (_, {name, gender, age}) => (addPerson(name, gender, age)),
        deleteById: (_, { id }) => (deleteById(id))
    },

};

export default resolvers;