const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const backgroundColor = document.querySelector("body");
const colorCode = document.querySelector(".color");
const buttonClick = document.querySelector("button");

const number = () => Math.floor(Math.random() * hex.length);

buttonClick.addEventListener("click", function () {
  let colorValue = "#";
  for (let i = 0; i < 6; i++) {
    colorValue += hex[number()];
  }

  backgroundColor.style.backgroundColor = `${colorValue}`;
  colorCode.textContent = `${colorValue}`;
});
