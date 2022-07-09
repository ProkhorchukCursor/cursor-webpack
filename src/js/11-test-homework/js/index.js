// HTML-elements

import {
 getPlanetsResultEl,
 getPlanetsBackButtonEl,
 getPlanetsNextButtonEl,
} from "./elements.js";

// Functions

import { getPlanetsInfo, getPlanetsBack, getPlanetsNext } from "./functions.js";

export const stateWookiee = { path: "" };

getPlanetsInfo(getPlanetsResultEl);

getPlanetsBackButtonEl.addEventListener("click", () => {
 getPlanetsBack();
});

getPlanetsNextButtonEl.addEventListener("click", () => {
 getPlanetsNext();
});
