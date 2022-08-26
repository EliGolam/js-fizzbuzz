// Script Initial Handshake confirmation
console.log('DEBUG: my_script.js - OK!');

// *************************************************************************
// Initializing Global Variables
const box = document.querySelector('.ms_box');
let item;
const total_items = 100;


// *************************************************************************
// FOR loop to create multiple "square" div objects 
for(item = 1; item <= total_items; item++) {
    // ******************************
    // Initializing local variable
    let message;

    // ******************************
    // Create square Element
    const square = document.createElement('div');
    const text = document.createElement('p');
    // Adding Styling to square through Bootstrap CSS
    square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
    text.classList.add('m-0', 'd-none', 'd-lg-block', 'square_text');
    square.append(text);
    box.append(square);


    // ******************************
    // SWITCH to determine the content of each square and its further styling
    switch (true) { // Pass Parameter "true" to evaluate Boolean
        case (item % 15 === 0):{
            message = 'FizzBuzz';
            square.classList.add('bg-clr-accent', 'fw-bold');
            break;  
        }
        case (item % 3 === 0): {
            message = 'Fizz'
            square.classList.add('bg-clr-secondary', 'fs-4');
            break;
        }
        case (item % 5 === 0): {
            message = 'Buzz'
            square.classList.add('bg-clr-tertiary', 'fs-4')
            break;
        }
        default: {
            message = item;
            square.classList.add('bg-clr-primary', 'fs-4');
        }
    }
    
    
    // ******************************
    // Adding the content evaluated through SWITCH to square
    console.log(message);
    text.append(message);

    // Simple eventListener that "pops" the element on click
    square.addEventListener ('click', () => {
        text.innerHTML = 'Popped!';
        square.classList.remove('bg-clr-accent', 'bg-clr-secondary', 'bg-clr-tertiary', 'bg-clr-primary');
        square.classList.add('bg-light');
    })
}
// END FOR LOOP
// *************************************************************************


// Simple button that refreshes the pages resetting the popped elements
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', () => {
    window.location.href=window.location.href;
})
