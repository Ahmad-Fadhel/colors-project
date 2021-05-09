const hexCode = document.querySelectorAll(".hex-code");
const randomBtn = document.getElementById("random");
const colorDiv = document.querySelectorAll(".color");
const copyingPopUp = document.getElementById("clipBoardPopUp")
const changeLockIcon = document.querySelectorAll(".lockIcon")

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

// const changeColorFalse = ()=>{
//   colorDiv.forEach((oneColorDiv)=>{
//     const singleHexCode = document.querySelector(".hex-code");
//     const LockIcon = document.querySelector(".lockIcon")
//     if(LockIcon.classList.contains("fa-lock")){
//        oneColorDiv.style.backgroundColor = `#${singleHexCode.innerText}`
//     }
//   })
// }