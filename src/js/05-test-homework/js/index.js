// Main array

import { students } from "./students.js";

// Functions

import {
 getSubjects,
 getAverageMark,
 getStudentInfo,
 getStudentsNames,
 getBestStudent,
 calculateWordLetters,
} from "./functions.js";

const result = `
    <p>Функція №1: ${getSubjects("Tanya")};</p>
    <p>Функція №2: ${getAverageMark("Tanya")};</p>
    <p>Функція №3: ${getStudentInfo("Tanya")};</p>
    <p>Функція №4: ${getStudentsNames(students)};</p>
    <p>Функція №5: ${getBestStudent(students)};</p>
    <p>Функція №6: ${calculateWordLetters("тест")};</p>
`;

console.log(result);

const container = document.querySelector("#hw-05");

container.innerHTML = `<div>${result}</div>`;
