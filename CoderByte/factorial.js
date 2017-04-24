// Factorial(!)
// 4! = 4 * 3 * 2 * 1 = 24

function factorial(num) {
    if(num === 1) { // Base case
        return num;
    }
    else { // Recursive case
        return num * factorial(num -1);
    }
}

console.log(factorial(4));
