// function declaration

function add(num1, num2) {

    return num1 + num2;
}

// console.log(add(10, 20));


// function expression
const add1 = function add1(num1, num2) {

    return num1 + num2;

}

// console.log(add1(30, 100));

// arrow function

const divide = (x, y) => x / y;
console.log(divide(21, 7));


const multiply = x => x * 20;
console.log(multiply(7));

const add3 = (a, b, c, d, e, f) => {

    const add = a + b + c + d + e + f;
    const multiply = a * b * c * d * e * f;
    const divide = a / b / c / d / e / f;

    console.log('add==', add, 'multiply==', multiply, 'divide ==', divide);

}

const arg = add3(10, 40, 39, 40, 33, 62)