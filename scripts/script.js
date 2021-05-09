const hexCode = document.querySelectorAll(".hex-code");
const randomBtn = document.getElementById("random");
const colorDiv = document.querySelectorAll(".color");
const copyingPopUp = document.getElementById("clipBoardPopUp")
const changeLockIcon = document.querySelectorAll(".lockIcon")
const saveBtn = document.getElementById("save")
const SavepopUpBackground = document.getElementById("SavepopUpBackground")
const saveCloseBtn = document.getElementById("saveCloseBtn")

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
    if(changeLockIcon[i].classList.contains("true")){
      hexCode[i].innerText = colorsArray[i];
      colorDiv[i].style.backgroundColor = colorsArray[i];
    }
  }
});

document.body.onkeyup = (e)=>{
  if(e.keyCode == 32){
    for (let i = 0; i < 5; i++) {
      const colorsArray = arrayOfColors();
      if(changeLockIcon[i].classList.contains("true")){
        hexCode[i].innerText = colorsArray[i];
        colorDiv[i].style.backgroundColor = colorsArray[i];
      }
    }
  }
}

hexCode.forEach(oneHex =>{
  oneHex.addEventListener("click", ()=>{
    window.navigator.clipboard.writeText(oneHex.innerText)
    copyingPopUp.style.display = "flex"
    copyingPopUp.style.color = oneHex.innerText
    setTimeout(()=>{
        copyingPopUp.style.display = "none";
    }, 1000);
  })
})

changeLockIcon.forEach(oneLock =>{
  oneLock.addEventListener("click", ()=>{
    lockBackground(oneLock);
  })
})

const lockBackground = (locked)=>{
  if(locked.classList.contains("fa-lock-open")){
    locked.classList.remove("fa-lock-open");
    locked.classList.add("fa-lock");
    locked.classList.remove("true");
    locked.classList.add("false");
  } else if (locked.classList.contains("fa-lock")){
    locked.classList.add("fa-lock-open");
    locked.classList.remove("fa-lock");
    locked.classList.remove("false");
    locked.classList.add("true");
  }
}

saveBtn.addEventListener("click", ()=>{
  SavepopUpBackground.style.display = "block"
})

saveCloseBtn.addEventListener("click", ()=>{
  SavepopUpBackground.style.display = "none"
})