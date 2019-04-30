import { getPeople, getById } from "./db";

const resolvers = {
  Query: {
    people: () => getPeople(),
    person: (_, { id }) => getById(id)
  }
  // Mutation: {
  //   addPerson: (_, {name}, {age}) 
  // }
};

export default resolvers;
