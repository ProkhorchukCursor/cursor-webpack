// Classes

import { Student } from "./Student.js";

// Students

import { students } from "./students.js";

// Default student

const student = new Student(
 "Вищої Школи Психотерапії м.Одеса",
 1,
 "Остап Бендер",
);
student.marks = 3;
student.marks = 4;
student.marks = 5;
student.marks = 4;
students.push(student);

const result = `
    <p>Студенти: ${JSON.stringify(students)};</p>
`;

console.log(result);

const container = document.querySelector("#hw-07");

container.innerHTML = `<div>${result}</div>`;
