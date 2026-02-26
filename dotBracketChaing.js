const info = {

    name:'taj',
    "home-address" : "alandanga , chuadnaga",
    age : 21 ,
    father : {

        name : "habibul islam",
        age : 60 ,

        // wife: {

        //     name: "talima khatun",
        //     age : 45 
        // }

    }
}

// dot notation
// console.log(info.name);
// console.log(info.father);
// console.log(info.father.name);
// console.log(info.father.wife.name);


// bracket notation
// console.log(info ['name']);
// console.log(info ['home-address']);
// console.log(info ['father'] ['wife']);


// chaining
console.log(info.father.wife?.name);