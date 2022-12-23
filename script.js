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

const switchTheme = () => {
  // Get root element and data-theme value
  const rootElem = document.documentElement
  let dataTheme = rootElem.getAttribute('data-theme'),
      newTheme

  newTheme = (dataTheme === 'light') ? 'dark' : 'light'

  // Set the new HTML atribute
  rootElem.setAttribute('data-theme', newTheme)
}
// Add event listner for the theme switcher
document.getElementById('darmodecheck').addEventListener('click', switchTheme)


// dark-mode------------------------------------------------------------