let selIn = document.getElementById("selIn");
let selOut = document.getElementById("selOut");
let inScale = document.getElementById("inScale");
let outScale = document.getElementById("outScale");

inScale.innerText = selIn.value + "º"
// outScale.innerText = selOut.value + "º"

function convert() {
  inScale.innerText = selIn.value + "º"
  let tempIn = document.getElementById("tempIn").value;
  // console.log(tempIn);
  let tempConv = Math.round((tempIn - 32) / 9 * 5);
  let tempOut = document.getElementById("tempOut");
  tempOut.innerText = tempConv
  outScale.innerText = selOut.value + "º"
}