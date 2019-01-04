let selIn = document.getElementById("selIn");
let selOut = document.getElementById("selOut");
let inScale = document.getElementById("inScale");
let outScale = document.getElementById("outScale");

inScale.innerText = selIn.value + "º"

function convert() {
  let tempConv;
  inScale.innerText = selIn.value + "º"
  let tempIn = document.getElementById("tempIn").value;
  if (selIn.value == "F") {
    tempConv = Math.round((tempIn - 32) / 9 * 5);
  } else {
    tempConv = Math.round(tempIn / 5 * 9 + 32);
  }
  let tempOut = document.getElementById("tempOut");
  tempOut.innerText = tempConv
  outScale.innerText = selOut.value + "º"
}