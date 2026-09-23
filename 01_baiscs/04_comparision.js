// console.log(2>1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2">1) // js autmatically converted string to num
// console.log("002"<1)

/* the above type of thing i.e. comparision between different datatype
 is not recommended- it makes result unpredictable */

//  console.log(null>0)  //false
//  console.log(null==0)  //false
//  console.log(null>=0)  //true

 /* the reason is that an equality check == and comparision > < >= <=
  works diffrently.
  comparison converts null to a number, treating it as 0.
  
  The loose equality operator (==) has a special rule for null:
null only equals undefined (and itself). It does not get converted to 0 when compared to a number.*/

// === (strict check)- its checks equality and datatype equality

console.log("2"===2) //false 