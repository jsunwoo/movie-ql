import { getPeople, getById, addPerson, deletePerson } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id)
  },
  Mutation: {
    addPerson: (_, { name, age }) => addPerson(name, age),
    deletePerson: (_, { id }) => deletePerson(id)
  }
};

export default resolvers;
