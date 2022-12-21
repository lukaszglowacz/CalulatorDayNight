// add clock
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

  // This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
    }

    // This function display values
function display(value) {
    document.getElementById("result").value += value;
}

    // This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
        document.getElementById("result").value = q;
}