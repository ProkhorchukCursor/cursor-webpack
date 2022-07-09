// Advanced

// 1) Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// 2) Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship.
// Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн.стипендії
// 3) Метод отримання стипендії автоматично викликається кожні 30 секунд після створення об'єкту.
// Підказка: викликайте його в constructor
// 4) Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5) Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )

// HTML-elements

import { getScholarshipResultEl } from "./elements.js";

// Classes

import { Student } from "./Student.js";

export class BudgetStudent extends Student {
 constructor(university, course, fullName) {
  super(university, course, fullName);
  this.scholarship = 0;
  // First mark
  this.marks = 4;
  //
  this.getScholarship();
  this.interval = null;
 }
 getScholarship() {
  getScholarshipResultEl.textContent = "Ваш рахунок: 0грн. Почекайте 30 сек.";
  this.interval = setInterval(() => {
   if (!this.dismissed && this.getAverageMark() >= 4) {
    this.scholarship += 1400;
    getScholarshipResultEl.textContent = `Ви отримали 1400грн. стипендії. Ваш рахунок ${this.scholarship}грн.`;
   } else {
    getScholarshipResultEl.textContent = `Погано вчився. Твій рахунок ${this.scholarship}грн.`;
    return clearInterval(this.interval);
   }
  }, 30000);
 }
}
