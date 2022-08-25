// Script Initial Handshake confirmation
console.log('DEBUG: my_script.js - OK!');

let item;
const total_items = 100;

for(item = 1; item <= total_items; item++) {
    let message;

    switch (true) { // Pass Parameter "true" to evaluate Boolean
        case (item % 15 === 0):{
            message = 'FizzBuzz';
            break;  
        }
        case (item % 3 === 0): {
            message = 'Fizz'
            break;
        }
        case (item % 5 === 0): {
            message = 'Buzz'
            break;
        }
        default: {
            message = item;
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
}