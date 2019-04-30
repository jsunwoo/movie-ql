import { getPeople, getById, addPerson } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id)
  },
  Mutation: {
    addPerson: (_, { name, age }) => addPerson(name, age)
  }
};

export default resolvers;
