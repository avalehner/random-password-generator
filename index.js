const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const charactersNoSymbols = characters.slice(0,62);
const charactersSymbols = characters.slice(62,92); 
const charactersNoNumbersNoSymbols = characters.slice(0,52);
const charactersNoNumbers = charactersNoNumbersNoSymbols.concat(charactersSymbols); 

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");
let passwordLength = document.getElementById("password-length");
let resetBtn = document.getElementById("reset")
let passwordLengthCalled = false;
let symbolsUsed = true;
let numbersUsed = true; 
let resultOne = "";
let resultTwo = "";

function setPasswordLength() {
    let passwordLengthValue = passwordLength.value; 
    passwordLengthCalled = true;  
    return passwordLengthValue;
}

function symbols() {
    symbolsUsed = false; 
}

function numbers() {
    numbersUsed = false;
}

function generatePassword() {
    resultOne = "";
    resultTwo = "";
    if (passwordLengthCalled === false && symbolsUsed === true && numbersUsed === true) {
        for (let i=0; i<15; i++) {
        resultOne += characters[Math.floor(Math.random()* characters.length)];
        resultTwo += characters[Math.floor(Math.random()* characters.length)];
        }  
    } else if (passwordLengthCalled === false && symbolsUsed === false && numbersUsed === true) {
        for (let i=0; i<15; i++) {
        resultOne += charactersNoSymbols[Math.floor(Math.random()* charactersNoSymbols.length)];
        resultTwo += charactersNoSymbols[Math.floor(Math.random()* charactersNoSymbols.length)];
        }    
    } else if (passwordLengthCalled === false && symbolsUsed === false && numbersUsed === false){
        for (let i=0; i<15; i++) {
        resultOne += charactersNoNumbersNoSymbols[Math.floor(Math.random()* charactersNoNumbersNoSymbols.length)];
        resultTwo += charactersNoNumbersNoSymbols[Math.floor(Math.random()* charactersNoNumbersNoSymbols.length)];    
        }     
    } else if (passwordLengthCalled === false && symbolsUsed === true && numbersUsed === false){
        for (let i=0; i<15; i++) {
        resultOne += charactersNoNumbers[Math.floor(Math.random()* charactersNoNumbers.length)];
        resultTwo += charactersNoNumbers[Math.floor(Math.random()* charactersNoNumbers.length)];    
        }     
    } else if (passwordLengthCalled === true && symbolsUsed === true && numbersUsed === true) {
        for (let i=0; i<setPasswordLength(); i++) {
        resultOne += characters[Math.floor(Math.random()* characters.length)];
        resultTwo += characters[Math.floor(Math.random()* characters.length)];
        }
    } else if (passwordLengthCalled === true && symbolsUsed === false && numbersUsed === true) {
        for (let i=0; i<setPasswordLength(); i++) {
        resultOne += charactersNoSymbols[Math.floor(Math.random()* charactersNoSymbols.length)];
        resultTwo += charactersNoSymbols[Math.floor(Math.random()* charactersNoSymbols.length)];
        }
    } else if (passwordLengthCalled === true && symbolsUsed === false && numbersUsed === false) {
        for (let i=0; i<setPasswordLength(); i++) {
        resultOne += charactersNoNumbersNoSymbols[Math.floor(Math.random()* charactersNoNumbersNoSymbols.length)];
        resultTwo += charactersNoNumbersNoSymbols[Math.floor(Math.random()* charactersNoNumbersNoSymbols.length)]; 
        }
    } else if (passwordLengthCalled === true && symbolsUsed === true && numbersUsed === false) {
        for (let i=0; i<setPasswordLength(); i++) {
        resultOne += charactersNoNumbers[Math.floor(Math.random()* charactersNoNumbers.length)];
        resultTwo += charactersNoNumbers[Math.floor(Math.random()* charactersNoNumbers.length)];   
        }
    }   
   passwordOne.textContent = resultOne; 
   passwordTwo.textContent = resultTwo;
}

resetBtn.addEventListener("click", function reset() {
    passwordOne.textContent = "";
    passwordTwo.textContent = "";
    let symbolsUsed = true;
    let numbersUsed = true; 
    let passwordLengthCalled = false;
})

function copyPasswordOne() {
    navigator.clipboard.writeText(resultOne); //
}

function copyPasswordTwo() {
    navigator.clipboard.writeText(resultTwo);
}





