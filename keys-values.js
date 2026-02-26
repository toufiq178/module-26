
const obj = {name: 'taj' , country : 'bangladesh' , age : 21};
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// const entries = Object.entries(obj);

// console.log(keys);
// console.log(values);
// console.log(entries);


// Object.freeze(obj)
Object.seal(obj)

delete obj.name 
delete obj.age 

obj.name = 'simba'



console.log(obj);
