export let people = [
  {
    id: 1,
    name: "Nicolas",
    age: 34
  },
  {
    id: 2,
    name: "Jinsung",
    age: 30
  },
  {
    id: 3,
    name: "Jason",
    age: 29
  }
];

export const getPeople = () => people;

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};

export const deletePerson = id => {
  const cleanedPeople = people.filter(person => person.id !== id);
  if (people.length > cleanedPeople.length) {
    people = cleanedPeople;
    return true;
  } else {
    return false;
  }
};
