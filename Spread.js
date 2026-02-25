const numbers = [1, 2, 3, 4];
// console.log(...numbers);

const name = 'bangladesh'
// console.log(...name);

const student = {

    name: 'taj',
    age: 20,
    hobby: 'web developer',
}

const sa = { ...student }
const s = student
s.name = 'rofik';
s.age = 30
// console.log( s);
// console.log( sa);


const n1 = [1, 2];
const n2 = [3, 4];

const n1AndN2 = [...n1, ...n2];
// console.log(n1AndN2);

const add12 = n1.concat(n2)
// console.log(add12);



const nms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const max = Math.max(...nms);
// console.log(max);


const arr = [20, 240, 293, 234, 92];

function arrMax(arar) {

    console.log(...arar);
    

    const max = Math.max(...arar);
    // return max
    console.log(max);
}

arrMax(arr)