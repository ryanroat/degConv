function convert() {
  let tempIn = document.getElementById("tempIn").value;
  console.log(tempIn);
  let tempConv = Math.round((tempIn - 32) / 9 * 5);
  let tempOut = document.getElementById("tempOut");
  tempOut.innerText = tempConv
}