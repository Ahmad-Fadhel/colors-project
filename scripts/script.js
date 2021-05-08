const hexCode = document.querySelectorAll(".hex-code");
const randomBtn = document.getElementById("random");

const generateCode = () => {
  let randomColor = "";
  let char = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    randomColor += char[Math.floor(Math.random() * 16)];
  }

  return randomColor;
};

randomBtn.addEventListener("click", () => {
  for (let i = 0; i < 5; i++) {
    hexCode[i].innerText = `#${generateCode()}`;
  }
});
