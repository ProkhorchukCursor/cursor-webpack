// В цьому домашньому завданні вам необхідно зробити мінімум 6 функцій (на вибір)

// (!) У функціях не потрібно виводити ніяких даних, вони мають бути чистими, по можливості.
// Після чого в кінці ДЗ потрібно обернути виклик ваших функцій в console.log або document.writeln.

// Приклад: Ваша функція об'явлена десь const myFunc = () => { ...}, в кінці вашого ДЗ ви виводите
// результат виклику document.writeln(`Функція №1: ${myFunc("аргументи, якщо є")}`)

// 1) Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

const getMaxDigit = (number) => {
 const string = number.toString();
 let result = 0;
 for (let i = 0; i < string.length; i++) {
  if (result < string[i]) {
   result = string[i];
  }
 }
 return result;
};

// 2) Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

const getPow = (base, exponent) => {
 if (base === 1 || exponent === 0) {
  return 1;
 }
 let result = base;
 for (let i = 0; i < Math.abs(exponent) - 1; i++) {
  result = result * base;
 }
 if (exponent < 0) {
  return 1 / result;
 } else {
  return result;
 }
};

// 3) Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

const getFormatingName = (name) => {
 let result = "";
 let isFirstTurn = true;
 for (let i = 0; i < name.length; i++) {
  if (isFirstTurn) {
   isFirstTurn = false;
   result = result + name[i].toUpperCase();
  } else {
   result = result + name[i].toLowerCase();
  }
 }
 return result;
};

// 4) Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

const getSumm = (summ) => {
 const tax = 19.5;
 return summ - (summ * tax) / 100;
};

// 5) Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// Приклад: getRandomNumber(1, 10) -> 5

const getRandomNumber = (number1, number2) => {
 return Math.round(Math.random() * (number2 - number1) + number1);
};

// 6) Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
// Приклад: countLetter("а", "Асталавіста") -> 4

const countLetter = (string, word) => {
 if (!isNaN(Number(string)) && string !== " ") {
  return "Ви ввели число";
 }
 let result = 0;
 const stringToLower = string.toLowerCase();
 for (let i = 0; i < word.length; i++) {
  const letterLower = word[i].toLowerCase();
  if (stringToLower === letterLower) {
   result++;
  }
 }
 return result;
};

// 7) Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$

const currencyUAH = "UAH";
const currency$ = "$";

const convertCurrency = (string) => {
 const isUAH = string.includes(currencyUAH);
 const is$ = string.includes(currency$);
 const number = parseInt(string);
 if (isNaN(number)) {
  return "Дуже смішно, введіть число";
 }
 if (isUAH) {
  return number / 25 + currency$;
 }
 if (is$) {
  return number * 25 + currencyUAH;
 }
 return "Помилка";
};

// 8) Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

const convertCurrencyUpdated = (string) => {
 const isUAH = string.toLowerCase().includes(currencyUAH.toLocaleLowerCase());
 const is$ = string.includes(currency$);
 const number = parseInt(string);
 if (isNaN(number)) {
  return "Дуже смішно, введіть число";
 }
 let result = `Будь ласка, вкажiть ${currencyUAH} або ${currency$}`;
 if (isUAH) {
  result = number / 25 + currency$;
 } else if (is$) {
  result = number * 25 + currencyUAH;
 } else {
  alert(result);
 }
 return result;
};

// 9) Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

const getRandomPassword = (number = 8) => {
 let result = "";
 for (let i = 0; i < number; i++) {
  result += Math.floor(Math.random() * 10);
 }
 return result;
};

// 10) Створіть функцію, яка видаляє всі букви з речення.
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

const deleteLetters = (letter, string) => {
 if (!isNaN(Number(letter)) && letter !== " ") {
  return "Ви ввели число";
 }
 let result = "";
 for (let i = 0; i < string.length; i++) {
  const element = string[i].toLowerCase();
  if (letter !== element) {
   result += element;
  }
 }
 return result;
};

// 11) Створіть функцію, яка перевіряє, чи є слово паліндромом.
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

const isPalyndrom = (value) => {
 const string = deleteLetters(" ", value).toLowerCase();
 for (let i = 0; i < string.length; i++) {
  const element = string[i];
  if (element !== string[string.length - i - 1]) {
   return false;
  }
 }
 return true;
};

// 12) Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

const deleteDuplicateLetter = (string) => {
 if (!isNaN(Number(string)) && string !== " ") {
  return "Ви ввели число";
 }
 let result = "";
 for (let i = 0; i < string.length; i++) {
  const element = string[i].toLowerCase();
  if (countLetter(element, string) === 1) {
   result += element;
  }
 }
 return result;
};

const result = `
    <p>Функція №1: ${getMaxDigit(1236)};</p>
    <p>Функція №2: ${getPow(2, 4)};</p>
    <p>Функція №3: ${getFormatingName("влад")};</p>
    <p>Функція №4: ${getSumm(1000)};</p>
    <p>Функція №5: ${getRandomNumber(1, 10)};</p>
    <p>Функція №6: ${countLetter("а", "Асталавіста")};</p>
    <p>Функція №7: ${convertCurrency("100$")};</p>
    <p>Функція №8: ${convertCurrencyUpdated("2500UAH")};</p>
    <p>Функція №9: ${getRandomPassword(4)};</p>
    <p>Функція №10: ${deleteLetters("a", "blablabla")};</p>
    <p>Функція №11: ${isPalyndrom("Я несу гусеня")};</p>
    <p>Функція №12: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")};</p>
`;

console.log(result);

const container = document.querySelector("#hw-02");

container.innerHTML = `<div>${result}</div>`;
