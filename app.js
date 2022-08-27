const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const backgroundColor = document.querySelector("body");
const colorCode = document.querySelector(".color");
const buttonClick = document.querySelector("button");

buttonClick.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  const colorValue = colors[randomNumber];
  backgroundColor.style.backgroundColor = `${colorValue}`;
  colorCode.textContent = `${colorValue}`;
});
