// Script Initial Handshake confirmation
console.log('DEBUG: my_script.js - OK!');

let item;
const total_items = 100;

const box = document.querySelector('.ms_box');

for(item = 1; item <= total_items; item++) {
    let message;

    // Create Element
    const square = document.createElement('div');
    square.classList.add('square', 'd-flex', 'justify-content-center', 'align-items-center');
    box.append(square);

    switch (true) { // Pass Parameter "true" to evaluate Boolean
        case (item % 15 === 0):{
            message = 'FizzBuzz';
            square.classList.add('bg-clr-accent');
            break;  
        }
        case (item % 3 === 0): {
            message = 'Fizz'
            square.classList.add('bg-clr-secondary');
            break;
        }
        case (item % 5 === 0): {
            message = 'Buzz'
            square.classList.add('bg-clr-tertiary')
            break;
        }
        default: {
            message = item;
            square.classList.add('bg-clr-primary');
        }
    }

    // if (item % 3 !== 0 && item % 5 !== 0) {
    //     message = item;
    // }
    // if (item % 3 === 0){
    //     message += 'Fizz'
    // }
    // if (item % 5 === 0){
    //     message += 'Buzz'
    // }
    console.log(message);
    square.append(message);
}