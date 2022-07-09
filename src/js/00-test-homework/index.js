//Variables

import { candy, banana, dress } from "./constants";

//1)

const maxPrice = Math.max(candy, banana, dress);

// console.log(maxPrice);

//2)

const minPrice = Math.min(candy, banana, dress);

// console.log(minPrice);

//3)

const summ = candy + banana + dress;

// console.log(summ);

//4)

const candyFloor = Math.floor(candy);
const bananaFloor = Math.floor(banana);
const dressFloor = Math.floor(dress);

const summFloor = candyFloor + bananaFloor + dressFloor;

// console.log(summFloor);

//5)

const summRound = Math.round(summ / 100) * 100;

// console.log(summRound);

//6)

const summBooleanDouble = Math.floor(summ) % 2 === 0;
const summBooleanNotDouble = Math.floor(summ) % 2 === 1;

// console.log(summBooleanDouble);
// console.log(summBooleanNotDouble);

//7)

const rest = 500 - summ;

// console.log(rest);

//8)

const mean = Math.round((summ / 3) * 100) / 100;

// console.log(mean);

//9)

const discount = Math.floor(Math.random() * 100);

// console.log(discount);

//10)

const summDiscount = Math.round(summ * (discount / 100));
const toPay = summ - summDiscount;
const toPayRound = Math.round(toPay * 100) / 100;

// console.log(toPayRound);

//11)

const costPrice = Math.round((summ / 2) * 100) / 100;
const profit = (costPrice * 100 - summDiscount * 100) / 100;

// console.log(profit);

// Advanced

const string = `
  <p>
    Максимальна цiна: ${maxPrice} $
  </p>
  <p>
    Мiнiмальна цiна: ${minPrice} $
  </p>
  <p>
    Вартiсть всiх товарiв: ${summ} $
  </p>
  <p>
    Сума цiлих цiн товарiв: ${summFloor} $
  </p>
  <p>
    Округлена сума цiн товарiв: ${summRound} $
  </p>
  <p>
    Чи є сума всiх товарiв(${Math.floor(
     summ,
    )}) парним числом?: ${summBooleanDouble} $
  </p>
  <p>
    Чи є сума всiх товарiв(${Math.floor(
     summ,
    )}) непарним числом?: ${summBooleanNotDouble} $
  </p>
  <p>
    Решта: ${rest} $
  </p>
  <p>
    Cереднє округлене цiн: ${mean} $
  </p>
  <p>
    Знижка: ${discount} %
  </p>
  <p>
    Сума до оплати: ${toPayRound} $
  </p>
  <p>
    Чистий прибуток: ${profit} $
  </p>
`;

const container = document.querySelector("#hw-00");

container.innerHTML = string;
