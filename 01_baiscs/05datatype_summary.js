//primitive
//7 types: string, number, boolean, null, undefined, symbol, bigInt

// dynamic typing-we do not specify the varaible type- it is automatically assigned

// const score= 100
// const scorevalue=100.3
// const isLoggedIn= false
// const OutsideTemp=null
// let userEmail; //undefined

// //symbol
// const id= Symbol('123')
// const AnotherId= Symbol('123') //both are different 

// console.log(id== AnotherId) //false 

// bigInt

const num= 5656264161649646645654496495n
console.log(typeof num) //bigint 


// Reference(Non primitive)
//Array, object, functions

const heroes =["shaktiman", "naagraj", "doga"] //array

//objects- key value pair

let myObj={
    name: "suraj",
    surname: "Paswan",
    age: 22
}


//function- in js we can store function as a variable

const myFunction = function(){
    console.log()
}

/*********************************************************************************************************************** */

// stack(primitive)     heap(non- primitive)
//stack

let myYoutubename= "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename)  // hiteshchoudharydotcom
console.log(anothername)  //chaiaurcode

//heap

let userOne= {
    email : "user@googledotcom",
    upi : "user@ybl"
}

let userTwo= userOne

userTwo.email="srjtkd0607@gmail.com"

console.log(userOne.email)  //srjtkd0607@gmail.com
console.log(userTwo.email)  // srjtkd0607@gmail.com
