const hexCode = document.querySelectorAll(".hex-code");
const randomBtn = document.getElementById("random");
const colorDiv = document.querySelectorAll(".color");

const generateCode = () => {
  let randomColor = "";
  let char = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    randomColor += char[Math.floor(Math.random() * 16)];
  }

  return randomColor;
};

let arrayOfColors = () => {
  let arrayOfColors = [];

  for (let i = 0; i < 5; i++) {
    arrayOfColors.push(`#${generateCode()}`);
  }
  return arrayOfColors;
};

randomBtn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    const colorsArray = arrayOfColors();
    hexCode[i].innerText = colorsArray[i];
    colorDiv[i].style.backgroundColor = colorsArray[i];
  }
});
