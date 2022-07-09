// Main array

import { DATA_BASE, MAX_SALARY, MIN_SALARY, TIME } from "./variables.js";

// HTML-elements

import { getMySalaryButtonEl, getMySalaryResultEl } from "./elements.js";

// Tasks

// 1) Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите
// як IT - спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

export const findCountry = (string) => {
 if (DATA_BASE[string.toLowerCase().trim()]) {
  return DATA_BASE[string.toLowerCase().trim()];
 }
 return;
};

export const getMyTaxes = function (salary) {
 if (!this) return "Країни не знайдено";
 if (!salary) return "Введіть вашу зарплатню";
 return (parseFloat(salary) * this.tax).toFixed(2) + "$";
};

// 2) Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків
// платять IT - спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call
// та працювати з даними через this

export const getMiddleTaxes = function () {
 if (!this) return "Країни не знайдено";
 return (this.middleSalary * this.tax).toFixed(2) + "$";
};

// 3) Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять
// IT - спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call
// та працювати з даними через this

export const getTotalTaxes = function () {
 if (!this) return "Країни не знайдено";
 return (this.middleSalary * this.tax * this.vacancies).toFixed(2) + "$";
};

// 4) Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду:
// { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином
// у діапазоні 1500 - 2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

const generateSalary = () =>
 Math.round(Math.random() * (MAX_SALARY - MIN_SALARY) + MIN_SALARY);

const generateData = (country) => {
 const salary = generateSalary();
 const taxes = getMyTaxes.call(country, salary);
 const profit = salary - parseInt(taxes);
 return {
  salary: salary + "$",
  taxes: taxes,
  profit: profit + "$",
 };
};

const showSalary = (country) => {
 const result = generateData(country);
 console.log(result);
 getMySalaryResultEl.textContent = JSON.stringify(result);
};

export const getMySalary = function () {
 if (!this) return (getMySalaryResultEl.textContent = "Країни не знайдено");
 if (getMySalaryButtonEl.className !== "js-start") return clearInterval(timer);

 showSalary(this);

 timer = setInterval(() => {
  showSalary(this);
 }, TIME);
};
