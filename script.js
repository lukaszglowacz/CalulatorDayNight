// clock----------------------------------------------------------------
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
// clock----------------------------------------------------------------



// dark-mode------------------------------------------------------------

var darkMode = true;
var changeText = false;
var changeBtn = document.getElementById('dark-mode-check');
var changePar = document.getElementById('dark-mode-par');

function toggleChangeText() {
  if (changeText) {
    changePar.innerHTML = "CHANGE TO DARK MODE";
    changeText = false;
  } else {
    changePar.innerHTML = "CHANGE TO LIGHT MODE";
    changeText = true;
  }
}

function toggleDarkMode() {
  if (darkMode) {
    document.body.classList.add("dark");
    darkMode = false;
  } else {
    document.body.classList.remove("dark");
    darkMode = true;
  }
}

changeBtn.addEventListener("click", function() {
  toggleChangeText();
  toggleDarkMode(); 
});

// dark-mode------------------------------------------------------------


// calculator functions------------------------------------------------------------

const calculator = {
  displayValue: '0',
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null
};



// calculator functions------------------------------------------------------------