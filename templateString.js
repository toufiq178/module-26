const student = {

    name: 'rafik',
    age: 20,
    roll: 12

}


function studentInfo(student) {

    const div = `

        my student id

        <h1> My name is ${student.name}</h1>
        <p> My age is ${student.age}</p>
        <p> My roll is ${student.roll}</p>

    `

    console.log(div);
    
}

studentInfo(student)



const num1 = 100 ;
const num2 = 30 ;
const num3 = 70 ;

const total = ` total $ ${num1 + num2 + num3}  multiply $${num1 * num2 * num3}  divide $ ${(num1 / num2 / num3) }`

console.log(total);
