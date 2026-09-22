// //let score= "33"
// // let score= "33abc"
// // let score= "null"
// let score= true


// console.log(typeof score)  // for knowing variable type

// let valueInNumber= Number(score)  // convert any datatype to number
// console.log(typeof valueInNumber)  
// console.log(valueInNumber)   //printing the value after conversion

// // "33" => 33
// // "33abc" => NaN
// // true => 1
// // false => 0

// let isLoggedIn= 1
// let booleanIsLoggedIn= Boolean(isLoggedIn)  // convert any datatype to boolean
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)  //printing the value after conversion

// // 1 => true
// // 0 => false
// // "abc" => true
// // "" => false
// // null => false
// // undefined => false

// let someNumber= 33
// let stringNumber= String(someNumber)  // convert any datatype to string
// console.log(typeof stringNumber)
// console.log(stringNumber)  //printing the value after conversion

// // 33 => "33"
// // true => "true"
// // null => "null"

// *****************************OPERATIONS ************************ 

// let value = 3
// let negValue= -value  // convert any number to negative number
// console.log(negValue)  //printing the value after conversion

// console.log(2+3)
// console.log(2-3) // 2-3= -1
// console.log(2*3)
// console.log(2**3)
// console.log(2/3) // 2/3=0.6666666666666666
// console.log(2%3)

//  let str1= "Hello"
//  let str2= "World"
//  console.log(str1+" "+str2)  // Hello World

//  console.log("1"+2)  // 12
//  console.log(1+"2")  // 12
//  console.log("1"+2+2)  // 122 => if string in first then all will be converted to string
//  console.log(1+2+"2")  // 32 =>if str in last then then opertion will be performed first and then attached string

 /* the above type of code is not recommended because it can lead to confusion and unexpected results.
  It's better to be explicit about the types of values being used in operations to avoid bugs and make the code more readable. */

  console.log((3+4)*5 %3); //2

  console.log(true) //true

  let num1= 3
  ++num1  // pre increment
  console.log(num1)  // 4

  let num2= 3
  num2++  // post increment
  console.log(num2)  // 4

  let num3= 3
  --num3  // pre decrement
  console.log(num3)  // 2

  let num4= 3
  num4--  // post decrement
  console.log(num4)  // 2