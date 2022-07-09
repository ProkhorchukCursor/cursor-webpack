// Main array

import { students } from './students.js';

// Tasks

// 1) Створіть функцію getSubjects(students[0]) --> ["Math", "Algorithms", "Data science"]
// - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const findStudent = (name) => {
 const student = students.find(
  (stud) => stud.name.toLowerCase() === name.toLowerCase(),
 );
 if (!student) return;
 return student;
};

export const getSubjects = (name) => {
 const student = findStudent(name);
 if (!student) return 'Не знайдено';
 const titles = Object.keys(student.subjects).map((title) => {
  const titleToUpper = title[0].toUpperCase() + title.slice(1, title.length);
  return titleToUpper.replace('_', ' ');
 });
 return JSON.stringify(titles);
};

// 2) Створіть функцію getAverageMark(students[0]) --> 3.79
// – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях:)

const getAverage = (numbers) => {
 const summ = numbers.reduce((acc, value) => acc + value, 0);
 return summ / numbers.length;
};

export const getAverageMark = (name) => {
 const student = findStudent(name);
 if (!student) return 'Не знайдено';
 const marks = Object.values(student.subjects).reduce(
  (acc, value) => (acc = acc.concat(...value)),
 );
 return getAverage(marks).toFixed(2);
};

// 3) Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}
// – яка повертає інформацію загального виду по переданому студенту(вам знадобиться функція з попереднього завдання).
// Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.

export const getStudentInfo = (student) => {
 const person = findStudent(student);
 if (!person) return 'Не знайдено';
 const { course, name } = person;
 const info = {
  course,
  name,
  averageMark: Number(getAverageMark(student)),
 };
 return JSON.stringify(info);
};

// 4) Створіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// – яка повертає імена студентів у алфавітному порядку.

export const getStudentsNames = (students) => {
 return JSON.stringify(students.map((student) => student.name).sort());
};

// 5) Створіть функцію getBestStudent(students) --> "Anton"
// – яка повертає кращого студента зі списку по показнику середньої оцінки.

export const getBestStudent = (students) => {
 const result = [];

 const studentsInfo = students
  .map((student) => JSON.parse(getStudentInfo(student.name)))
  .sort((a, b) => b.averageMark - a.averageMark);

 const bestStudents = studentsInfo.filter(
  (student) => student.averageMark === studentsInfo[0].averageMark,
 );

 result.push(...bestStudents.map((bestStud) => bestStud.name));

 return JSON.stringify(result);
};

// 6) Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 }
// – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

export const calculateWordLetters = (word) => {
 if (!word) return 'Не ввели';
 const array = word.split('');
 let result = {};
 for (let i = 0; i < word.length; i++) {
  const letter = word[i];
  const number = array.filter((lett) => lett === letter).length;
  const obj = { [letter]: number };
  result = { ...result, ...obj };
 }
 return JSON.stringify(result);
};
