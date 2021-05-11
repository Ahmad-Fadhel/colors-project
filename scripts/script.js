const hexCode = document.querySelectorAll(".hex-code");
const randomBtn = document.getElementById("random");
const colorDiv = document.querySelectorAll(".color");
const copyingPopUp = document.getElementById("clipBoardPopUp")
const changeLockIcon = document.querySelectorAll(".lockIcon")
const saveBtn = document.getElementById("save")
const SavepopUpBackground = document.getElementById("SavepopUpBackground")
const saveCloseBtn = document.getElementById("saveCloseBtn")
const libraryBtn = document.getElementById("library")
const librarypopUpBackground = document.getElementById("librarypopUpBackground")
const libraryCloseBtn = document.getElementById("libraryCloseBtn")

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

const randomizeColor = ()=>{
  for (let i = 0; i < 5; i++) {
    const colorsArray = arrayOfColors();
    if(changeLockIcon[i].classList.contains("true")){
      hexCode[i].innerText = colorsArray[i];
      colorDiv[i].style.backgroundColor = colorsArray[i];
    }
  }
}

randomBtn.addEventListener("click", () => {
  randomizeColor()
});

document.body.onkeyup = (e)=>{
  if(e.keyCode == 32){
    randomizeColor()
  }else if(e.keyCode == 83){
    saveBtn.onclick();
  }else if(e.keyCode == 76){
    libraryBtn.onclick();
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

saveBtn.onclick = ()=>{
  SavepopUpBackground.style.display = "block"
}

saveCloseBtn.onclick = ()=>{
  SavepopUpBackground.style.display = "none"
}   

libraryBtn.onclick = ()=>{
  librarypopUpBackground.style.display = "block"
}

libraryCloseBtn.onclick = ()=>{
  librarypopUpBackground.style.display = "none"
}


//change this once tha localStorage is ready
 window.onload = () =>{
  randomizeColor()
 }
