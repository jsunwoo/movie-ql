import fetch from "node-fetch";
const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = () => {
  fetch(`${API_URL}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};

// export let movies = [
//   {
//     id: 1,
//     name: "Nicolas",
//     age: 34
//   },
//   {
//     id: 2,
//     name: "Jinsung",
//     age: 30
//   },
//   {
//     id: 3,
//     name: "Jason",
//     age: 29
//   }
// ];

// export const getMovies = () => movies;

// export const getById = id => {
//   const filteredMovies = movies.filter(movie => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = id => {
//   const cleanedMovies = movies.filter(movie => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, age) => {
//   const newMovie = {
//     id: `${movies.length + 1}`,
//     name,
//     age
//   };
//   movies.push(newMovie);
//   return newMovie;
// };
