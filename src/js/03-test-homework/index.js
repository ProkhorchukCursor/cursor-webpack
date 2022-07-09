// Кожне завдання виконується у вигляді чистої функції. Функція повертає масив або інше значення, але не змінює його!
// У консоль/html виводите результат виклику функції:

// const pairs = getPairs(students);
// console.log(pairs);

// Перед виконанням цього домашнього завдання необхідно створити 3 масиви:

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
 "Диференційне рівняння",
 "Теорія автоматів",
 "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

// 1) Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

const getTeam = (students) => {
 const girls = students.filter((stud) => {
  return stud[stud.length - 1] === "а";
 });
 const guys = students.filter((stud) => {
  return stud[stud.length - 1] !== "а";
 });
 return guys.map((guy, i) => [guy, girls[i]]);
};

// 2) Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

const getProject = (teams, projects) => {
 const newTeam = teams.map((el) => el.join(" і "));
 return newTeam.map((team, i) => [team, projects[i]]);
};

// 3) Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

const getMarks = (students, marks) =>
 students.map((stud, i) => [stud, marks[i]]);

// 4) Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

const getTeamMarks = (teams) =>
 teams.map((team) => [...team, Math.ceil(Math.random() * 5)]);

// console.log

const team = getTeam(students);
const projects = getProject(team, themes);
const arrayWithMarks = getMarks(students, marks);
const teamWithMarks = getTeamMarks(projects, themes);

console.log("task1: ", team);
console.log("task2: ", projects);
console.log("task3: ", arrayWithMarks);
console.log("task4: ", teamWithMarks);

const result = `
    <p>Функція №1: ${team};</p>
    <p>Функція №2: ${projects};</p>
    <p>Функція №3: ${arrayWithMarks};</p>
    <p>Функція №4: ${teamWithMarks};</p>
`;

console.log(result);

const container = document.querySelector("#hw-03");

container.innerHTML = `<div>${result}</div>`;
