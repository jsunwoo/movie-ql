export const people = [
  {
    id: 1,
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id: 2,
    name: "Jinsung",
    age: 18,
    gender: "female"
  },
  {
    id: 3,
    name: "Jason",
    age: 18,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
