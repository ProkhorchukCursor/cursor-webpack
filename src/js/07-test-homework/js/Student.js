// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

// 1) У студентів повинні бути наступні властивості: university, course, fullName,
// вони передаються при створенні студента(в конструктор).
// 2) Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер",
// метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// 3) Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
// 4) Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
// Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// 5) Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// 6) Створіть метод this.dismiss, який "виключить" студента.
// Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// 7) Створіть метод this.recover, який дозволить поновити студента

export class Student {
 constructor(university, course, fullName) {
  this.university = university;
  this.course = course;
  this.fullName = fullName;
  this.marksArray = [];
  this.dismissed = false;
 }

 getInfo = () =>
  `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;

 get marks() {
  if (this.dismissed) return null;
  return this.marksArray;
 }

 set marks(mark) {
  if (this.dismissed) return;
  this.marksArray.push(mark);
 }

 getAverageMark() {
  if (this.dismissed) return null;
  if (!this.marks.length) return 'Нема оцінок';
  const average =
   this.marks.reduce((sum, item) => sum + item, 0) / this.marks.length;
  return average.toFixed(1);
 }

 dismiss() {
  this.dismissed = true;
 }

 recover() {
  this.dismissed = false;
 }
}
