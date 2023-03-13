let number = document.querySelectorAll(".number");
let inp = document.querySelector(".calculator__inp");
let sign = document.querySelectorAll(".sign");
let result = document.querySelector(".result");
let clearBtn = document.querySelector(".clear");
let modulus = document.querySelector(".percent");
let toggleSign = document.querySelector(".toggleSign");

for (i = 0; i < number.length; i++) {
  number[i].addEventListener("click", insertValue);
}

for (i = 0; i < sign.length; i++) {
  sign[i].addEventListener("click", insertValue);
}

function insertValue() {
  if ((isNaN(inp.value.slice(-1)) || undefined) && isNaN(this.innerText)) {
    inp.value += "";
  } else {
    inp.value += this.innerText;
  }
}

result.addEventListener("click", getResult);

function getResult() {
  inp.value = eval(inp.value);
}

clearBtn.addEventListener("click", clearAll);
modulus.addEventListener("click", insertValue);
toggleSign.addEventListener("click", toggleF);

function clearAll() {
  inp.value = "";
}
function toggleF() {
  inp.value = inp.value * -1;
}
