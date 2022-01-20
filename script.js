let myArray= []
for(let i =0 ; i< 3 ; i++){
  let number= +(prompt('enter the number'))
  myArray.push(number)
}

// Slice-Method
console.log(myArray)             //show the array for example [1, 2, 3]
myArray.splice(1, 1)            //delete the second item
console.log(myArray)           // [1, 3]
myArray.splice(1, 1, 4, 5)    //delete the second item and add items from the second item
console.log(myArray)         // [1, 4, 5]

// FindIndex-Method
let IndexNumber = myArray.findIndex(index=>{
  return(index===5)
})
console.log(IndexNumber)   //2