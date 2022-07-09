// Constants

import { RANDOM_ARRAY_ARGS, BAD_WORDS } from "./constants.js";

// Functions

// 1) Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа,
// max – максимальне значення цілого числа.
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

export const getValidateArgs = (args, response) => {
 const result = [];
 args.forEach((argument, i) => {
  if (!argument || argument < 0 || argument % 1 !== 0) result.push(response[i]);
 });
 if (result.length) {
  return `Ви ввели некоректні: ${result}`;
 }
};

export const getRandomArray = (length, min, max) => {
 const isInvalid = getValidateArgs([length, min, max], RANDOM_ARRAY_ARGS);
 if (isInvalid) return isInvalid;
 if (min >= max) return "Максимальне число має бути більше за мінімальне число";
 const newArray = [];
 for (let index = 0; index < length; index++) {
  newArray.push(Math.round(Math.random() * (max - min) + min));
 }
 return JSON.stringify(newArray);
};

// 2) Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

export const getNumber = (value) => {
 const array = value.split(",");
 const numbers = array
  .filter((num) => num % 1 === 0 && !isNaN(Number(num)) && num.trim() !== "")
  .map((el) => Number(el));
 return numbers;
};

export const getModa = (...numbers) => {
 let result = [];
 let maxLength = 0;
 numbers.forEach((num) => {
  const numbersLength = numbers.filter((el) => el === num).length;
  if (numbersLength > maxLength) {
   maxLength = numbersLength;
   result = [num];
  }
  if (numbersLength === maxLength) {
   result.push(num);
  }
 });
 result = new Set(result);
 return JSON.stringify([...result]);
};

// 3) Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

export const getAverage = (...numbers) => {
 if (!numbers.length) return "Введіть ціле число";
 const summ = numbers.reduce((acc, value) => acc + value, 0);
 return summ / numbers.length;
};

// 4) Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

export const getMedian = (...numbers) => {
 if (!numbers.length) return "Введіть ціле число";
 const numbersSorted = numbers.sort((a, b) => a - b);
 const medianIndex = Math.floor(numbersSorted.length / 2);
 if (numbersSorted.length % 2 === 0)
  return (numbersSorted[medianIndex] + numbersSorted[medianIndex - 1]) / 2;
 return numbersSorted[medianIndex];
};

// 5) Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

export const filterEvenNumbers = (...numbers) =>
 JSON.stringify(numbers.filter((num) => num % 2 !== 0));

// 6) Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

export const countPositiveNumbers = (...numbers) =>
 numbers.filter((num) => num > 0).length;

// 7) Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті,
// які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

export const getDividedByFive = (...numbers) =>
 JSON.stringify(numbers.filter((num) => num % 5 === 0 && num !== 0));

// 8) Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції.split(" "),
// після чого масив необхідно буде склеїти.join(" ")
// Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// Приклад: replaceBadWords("Holy shit!") -> "Holy ****!"
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

export const replaceBadLetter = (word) => {
 const wordToLower = word.toLowerCase();
 const isBadWord = BAD_WORDS.filter((el) => wordToLower.includes(el));
 if (!isBadWord.length) return word;
 const wordReplaced = wordToLower.replace(isBadWord, "****");
 const wordRecursed = replaceBadLetter(wordReplaced);
 let result = "";
 for (let i = 0; i < word.length; i++) {
  if (word[i] !== wordRecursed[i]) {
   result += wordRecursed[i].toUpperCase();
  } else {
   result += word[i];
  }
 }
 return result;
};

export const replaceBadWords = (string) => {
 if (!string) return "Ще не ввели";
 const array = string.split(" ").map((el) => replaceBadLetter(el));
 return array.join(" ");
};

export const addBadWord = (word) => {
 if (!BAD_WORDS.includes(word)) BAD_WORDS.push(word.toLowerCase());
 replaceBadWordsListEl.textContent = BAD_WORDS;
};

// 9) Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває.Пробіли завжди видаляються.Рядок приводится до нижнього регістру.
// Приклад: divideByThree("Commander") -> ["com", "man", "der"]
// Приклад: divideByThree("live") -> ["liv", "e"]

export const divideByThree = (word) => {
 if (!word) return "Ще не ввели";
 if (word.length < 3) return word.toLowerCase();
 const result = [];
 let string = "";
 const array = word.split("").filter((letter) => letter !== " ");
 array.forEach((letter, i) => {
  string += letter;
  if ((i + 1) % 3 === 0 || i === array.length - 1) {
   result.push(string.toLowerCase());
   string = "";
  }
 });
 return JSON.stringify(result);
};

// 10) Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень)
// букв в слові.Для тестів не передавайте слова в яких більше 10 букв.Краще взагалі обмежити работу функції 10 буквами.
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"]
// Приклад: generateCombinations("ol") -> ["ol", "lo"]

export const generateCombinations = (word) => {
 let result = [];
 if (!word) return ["Ще не ввели"];
 if (word.length > 10) return "Обмеження 10 букв";
 if (word.length <= 1) {
  return word.length == 0 ? [] : [word];
 }
 for (let i = 0; i < word.length; i++) {
  let first = word[i];
  let newArr = word.slice(0, i) + word.slice(i + 1);
  let others = generateCombinations(newArr);
  others &&
   others.forEach((item) => {
    result.push(first + item);
   });
 }
 result = [...new Set(result)];
 return result;
};
