// Constants

import { TIME, CLASS_START, CLASS_STOP } from "./constants.js";

// Functions

export const handleStartFunc = (element) => {
 element.className =
  element.className === CLASS_START ? CLASS_STOP : CLASS_START;
 element.textContent =
  element.className === CLASS_START ? "Зупинити" : "Перевірити";
};

const genHieroglyph = (arr, res) => {
 const sign = Date.now().toString().slice(-5);
 setTimeout(res, TIME);
 return arr.push(String.fromCharCode(sign));
};

export const getRandomChinese = async (length) => {
 const hieroglyphArr = [];

 while (0 < length) {
  await new Promise((resolve) => {
   genHieroglyph(hieroglyphArr, resolve);
  });
  length--;
 }

 return hieroglyphArr;
};
