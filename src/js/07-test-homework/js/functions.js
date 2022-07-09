// Students

import { students } from "./students.js";

// Classes

import { Student } from "./Student.js";
import { BudgetStudent } from "./BudgetStudent.js";

// Validation

const validatorCourse = (string) => {
 const number = Number(string);
 const defaultCourse = 1;
 if (isNaN(number) || !Number.isInteger(number) || number === 0)
  return defaultCourse;
 return number;
};

const validatorFullName = (name) => {
 if (!name) return "Введіть ім'я";
 if (students.find((stud) => stud.fullName === name))
  return "Ім'я вже є в базі";
};

const validatorUniversity = (university) => {
 if (university) return university;
};

const validator = (university, name) => {
 if (!validatorUniversity(university)) return "Введіть університет";
 if (validatorFullName(name)) return validatorFullName(name);
};

const validatorFindStudent = (name) => {
 if (!name) return "Введіть ім'я";
 if (!students.find((stud) => stud.fullName === name))
  return "Ім'я не знайдено в базі";
};

// Functions

// 1)

const findStudent = (fullNameEl) =>
 students.find((stud) => stud.fullName === fullNameEl.value.trim());

export const addStudent = (
 universityEl,
 courseEl,
 fullNameEl,
 resultEl,
 studentsEl,
) => {
 const university = universityEl.value.trim();
 const course = validatorCourse(courseEl.value);
 const fullName = fullNameEl.value.trim();

 if (validator(university, fullName)) {
  return (resultEl.textContent = validator(university, fullName));
 }

 const student = new Student(university, course, fullName);
 students.push(student);
 studentsEl.textContent = students.map((stud) => stud.fullName);
 resultEl.textContent = JSON.stringify(student);
};

// 2)

export const getInfoStudent = (fullNameEl, resultEl) => {
 if (validatorFindStudent(fullNameEl.value.trim())) {
  return (resultEl.textContent = validatorFindStudent(fullNameEl.value.trim()));
 }
 const student = findStudent(fullNameEl);
 resultEl.textContent = student.getInfo();
};

// 3)

export const getMarksStudent = (fullNameEl, resultEl) => {
 if (validatorFindStudent(fullNameEl.value.trim())) {
  return (resultEl.textContent = validatorFindStudent(fullNameEl.value.trim()));
 }
 const student = findStudent(fullNameEl);
 resultEl.textContent = JSON.stringify(student.marks);
};

// 4)

export const setMarksStudent = (fullNameEl, markEl, resultEl) => {
 if (validatorFindStudent(fullNameEl.value.trim())) {
  return (resultEl.textContent = validatorFindStudent(fullNameEl.value.trim()));
 }
 if (!markEl.value) {
  return (resultEl.textContent = "Введіть оцінку");
 }
 const student = findStudent(fullNameEl);
 student.marks = Number(markEl.value);
 resultEl.textContent = JSON.stringify(student.marks);
};

// 5)

export const getAverageMarkStudent = (fullNameEl, resultEl) => {
 if (validatorFindStudent(fullNameEl.value.trim())) {
  return (resultEl.textContent = validatorFindStudent(fullNameEl.value.trim()));
 }
 const student = findStudent(fullNameEl);
 if (student.dismissed) return (resultEl.textContent = "Студента відраховано");
 resultEl.textContent = JSON.stringify(student.getAverageMark());
};

// 6)

export const dismissStudent = (fullNameEl, resultEl) => {
 if (validatorFindStudent(fullNameEl.value.trim())) {
  return (resultEl.textContent = validatorFindStudent(fullNameEl.value.trim()));
 }
 const student = findStudent(fullNameEl);
 student.dismiss();
 if (student.dismissed) return (resultEl.textContent = "Виключено");
};

// 7)

export const recoverStudent = (fullNameEl, resultEl) => {
 if (validatorFindStudent(fullNameEl.value.trim())) {
  return (resultEl.textContent = validatorFindStudent(fullNameEl.value.trim()));
 }
 const student = findStudent(fullNameEl);
 student.recover();
 if (!student.dismissed) return (resultEl.textContent = "Поновлено");
};

// Advanced

export const addBudgetStudent = (
 universityEl,
 courseEl,
 fullNameEl,
 resultEl,
 studentsEl,
) => {
 const university = universityEl.value.trim();
 const course = validatorCourse(courseEl.value);
 const fullName = fullNameEl.value.trim();

 if (validator(university, fullName)) {
  return (resultEl.textContent = validator(university, fullName));
 }

 const student = new BudgetStudent(university, course, fullName);
 students.push(student);
 studentsEl.textContent = students.map((stud) => stud.fullName);
 resultEl.textContent = JSON.stringify(student);
};
