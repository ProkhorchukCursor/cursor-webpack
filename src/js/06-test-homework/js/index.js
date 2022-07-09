// Functions

import {
 getMyTaxes,
 findCountry,
 getMiddleTaxes,
 getTotalTaxes,
} from "./functions.js";

const result = `
    <p>Функція №1: ${getMyTaxes.call(findCountry("ukraine"), 1000)};</p>
    <p>Функція №2: ${getMiddleTaxes.call(findCountry("ukraine"))};</p>
    <p>Функція №3: ${getTotalTaxes.call(findCountry("ukraine"))};</p>
`;

console.log(result);

const container = document.querySelector("#hw-06");

container.innerHTML = `<div>${result}</div>`;
