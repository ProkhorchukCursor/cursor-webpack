// Constants

import {
 CLASS_START,
 CLASS_STOP,
 ELEMENT,
 ELEMENT_WIDTH,
 ELEMENT_HEIGHT,
 NUMBER_ELEMENTS,
} from "./constants.js";

// Functions

export const handleStartFunc = (element) => {
 element.className =
  element.className === CLASS_START ? CLASS_STOP : CLASS_START;
 element.textContent =
  element.className === CLASS_START ? "Зупинити" : "Перевірити";
};

const createColor = () => Math.floor(Math.random() * 255 + 1);

const generateColors = () =>
 `rgb(${createColor()} ${createColor()} ${createColor()})`;

const generateStyles = (block) => {
 block.style.backgroundColor = generateColors();
 block.style.width = ELEMENT_WIDTH;
 block.style.height = ELEMENT_HEIGHT;
};

const createBlocks = () => {
 const result = [];
 for (let i = 0; i < NUMBER_ELEMENTS; i++) {
  const block = document.createElement(ELEMENT);
  generateStyles(block);
  result.push(block);
 }
 return result;
};

export const generateBlocks = (element) => {
 while (element.firstChild) {
  element.removeChild(element.lastChild);
 }

 const blocks = createBlocks();
 blocks.map((block) => element.appendChild(block));
};
