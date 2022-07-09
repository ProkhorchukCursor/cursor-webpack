// Functions

import {
 getRandomArray,
 getModa,
 getAverage,
 getMedian,
 filterEvenNumbers,
 countPositiveNumbers,
 getDividedByFive,
 replaceBadWords,
 divideByThree,
 generateCombinations,
} from "./functions.js";

const result = `
    <p>Функція №1: ${getRandomArray(15, 1, 100)};</p>
    <p>Функція №2: ${getModa(
     6,
     2,
     55,
     11,
     78,
     2,
     55,
     77,
     57,
     87,
     23,
     2,
     56,
     3,
     2,
    )};</p>
    <p>Функція №3: ${getAverage(
     6,
     2,
     55,
     11,
     78,
     2,
     55,
     77,
     57,
     87,
     23,
     2,
     56,
     3,
     2,
    )};</p>
    <p>Функція №4: ${getMedian(
     6,
     2,
     55,
     11,
     78,
     2,
     55,
     77,
     57,
     87,
     23,
     2,
     56,
     3,
     2,
    )};</p>
    <p>Функція №5: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)};</p>
    <p>Функція №6: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)};</p>
    <p>Функція №7: ${getDividedByFive(
     6,
     2,
     55,
     11,
     78,
     2,
     55,
     77,
     57,
     87,
     23,
     2,
     56,
     3,
     2,
    )};</p>
    <p>Функція №8: ${replaceBadWords("Are you fucking kidding?")};</p>
    <p>Функція №9: ${divideByThree("Commander")};</p>
    <p>Функція №10: ${generateCombinations("man")};</p>
`;

console.log(result);

const container = document.querySelector("#hw-04");

container.innerHTML = `<div>${result}</div>`;
