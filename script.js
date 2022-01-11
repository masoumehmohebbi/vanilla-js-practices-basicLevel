let MynumbersArray = [
  {id:1, number:2},
  {id:2, number:13},
  {id:3, number:84},
  {id:4, number:39},
]

MynumbersArray.forEach(num =>{
  if (num.number % 2 == 0) {
console.log('Even Numbers In MyNumbersArray => ', num.number)
    
  }
} )