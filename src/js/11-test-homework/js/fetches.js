import { API } from "./constants.js";

import { stateWookiee } from "./index.js";

// import { loaderToggle } from "./functions.js";

export const getFilm = (film) => {
 //  loaderToggle();
 return fetch(`${API}/films/${film}`)
  .then((response) => {
   return response.json();
  })
  .catch("getFilmError");
 // .finally(() => loaderToggle());
};

export const getCharacter = (charact) => {
 //  loaderToggle();
 return fetch(`${charact}/${stateWookiee.path}`)
  .then((response) => {
   return response.json();
  })
  .catch("getCharactersError");
 // .finally(() => loaderToggle());
};

export const getPlanets = (planetId) => {
 //  loaderToggle();
 return fetch(`${API}/planets/${planetId}/${stateWookiee.path}`)
  .then((response) => {
   return response.json();
  })
  .catch("getPlanetsError");
 // .finally(() => loaderToggle());
};
