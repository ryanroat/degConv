const selIn = document.getElementById('selIn');
const selOut = document.getElementById('selOut');
const inScale = document.getElementById('inScale');
const outScale = document.getElementById('outScale');

inScale.innerText = `${selIn.value}º`;

function convert() {
    const tempIn = document.getElementById('tempIn').value;
    let tempConv;

    inScale.innerText = `${selIn.value}º`;
    if (selIn.value == 'F') {
        tempConv = Math.round(((tempIn - 32) / 9) * 5);
    } else {
        tempConv = Math.round((tempIn / 5) * 9 + 32);
    }
    const tempOut = document.getElementById('tempOut');
    tempOut.innerText = tempConv;
    outScale.innerText = `${selOut.value}º`;
}

// process user changes to temp scales
selIn.addEventListener('change', () => {
    console.log('selIn change');
    selOut.value = selIn.value == 'F' ? 'C' : 'F';
    inScale.innerText = `${selIn.value}º`;
});
