// Get necessary DOM elements
var number = document.getElementsByTagName('b')[0];
var error = document.getElementById('div3');
var buttonClear = document.getElementById('button3');

// Initially hide clear button
buttonClear.style.display = 'none';

// Function to increase count
function increment(){
    number.innerHTML++;
    error.innerHTML = '';
    if(number.innerHTML > 1) {
        buttonClear.style.display = 'inline-block';
    }
}

// Function to decrease count
function decrement(){
    // Check for negative counts
    if(number.innerText > 0) {
        number.innerHTML--;
    } else if(number.innerHTML == 0) {
        error.innerHTML = 'Error : Cannot go below 0';
        buttonClear.style.display = 'none';
    } else if(number.innerHTML > 0) {
        error.innerHTML = '';
        buttonClear.style.display = 'inline-block';
    }
}

// Function to clear count
buttonClear.onclick = function clear(){
    number.innerText = 0;
    // error.innerHTML = 'Error : Cannot go below 0';
    buttonClear.style.display = 'none';
}
