//? Необхідно написати програму, яка виконує складання чисел від N до M (N та M – задаються користувачем),
//? а також програма має вміти пропускати парні числа. Нижче приведено алгоритм, що потрібно зробити.

//? (!) При виводі суми можна використовувати функції console.log или document.writeln

//? 1) Отримайте у користувача число(N) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
//? 2) Перевірте, чи є передане значення N ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)
//? 3) Отримайте у користувача число(M) до якого ми будемо складати (включно). Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
//? 4) Перевірте, чи є передане значення M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)
//? 5) Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа.
//?    TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
//? 6) Напишіть цикл, який буде складати числа від раніше отриманих N и M
//? 7) В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. (Використовуйте для цього if/else).
//?    Якщо парні числа потрібно пропускати не додавайте їх до суми.
//? 8) Виведіть результат

// Приклад: користувач ввів такі значення для N=10, M=100, ПропускатиПарні=TRUE – сума чисел виведена на екрані буде === 2475
// Приклад: користувач ввів такі значення для N=10, M=100, ПропускатиПарні=FALSE – сума чисел виведена на екрані буде === 5005
// Приклад: користувач ввів такі значення для N=1, M=10, ПропускатиПарні=FALSE – сума чисел виведена на екрані буде === 55

const container = document.querySelector("#hw-01");
const button = document.querySelector("#hw-01-btn");

if (button)
 button.addEventListener("click", () => {
  //! 1)

  let N;
  // N = Number(prompt(`Напишiть ваше цiле число N.`));

  // console.log(N);

  //! 2)

  let isIntegerN;

  do {
   N = +prompt(`Напишiть ваше цiле число N.`);
   isIntegerN = Number.isInteger(N);
  } while (!N || !isIntegerN);

  // console.log(isIntegerN);

  //! 3)

  let M;
  // M = Number(prompt(`Напишiть ваше цiле число M.`));

  // console.log(M);

  //! 4)

  let isIntegerM;

  do {
   M = +prompt(`Напишiть ваше цiле число M. Воно повинно бути бiльше ${N}`);
   isIntegerM = Number.isInteger(M);
  } while (!M || !isIntegerM || M <= N);

  // console.log(isIntegerM);

  //! 5)

  const question = confirm("Чи потрiбно пропускати парнi числа?");

  // console.log(question);

  //! 6)

  let summ = 0;
  let numberN = N;
  let numberM = M;

  if (N || M) {
   if (N < M) {
    while (numberN <= M) {
     summ += numberN;
     numberN++;
    }
   } else {
    while (numberM <= N) {
     summ += numberM;
     numberM++;
    }
   }
  }

  // console.log(summ);

  //! 7)

  let summWithIf = 0;
  let numberMin = N;
  let numberMax = M;
  // if (N > M) {
  //   numberMin = M;
  //   numberMax = N;
  // }

  if (numberMin || numberMax) {
   while (numberMin <= numberMax) {
    if (question) {
     if (numberMin % 2 === 1) {
      summWithIf += numberMin;
      numberMin++;
     } else {
      numberMin++;
     }
    } else {
     summWithIf += numberMin;
     numberMin++;
    }
   }
  }

  // console.log(summWithIf);

  //! 8)

  const result = `Користувач ввiв такi значення для N=${N}, M=${M}. N це цiле число? - ${isIntegerN}. M це цiле число? - ${isIntegerM}. Пропускати Парнi = ${question} – сума чисел виведена на екранi буде === ${summWithIf}`;

  console.log(result);

  container.innerHTML = `<p>${result}</p>`;
 });

// document.writeln(`<div class="container"><h2>${result}</h2></div>`);
