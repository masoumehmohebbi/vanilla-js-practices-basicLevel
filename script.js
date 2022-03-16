let getUserNumber
let myArray = []
let firstNumber 
let SecondNumber 
let thierdNumber
let sumDigit = 0 
let sumAllNumbers =0

for(let i = 0 ; i < 3 ; i++){

   getUserNumber = Number(prompt('please Insert Your ' + (i + 1) + ' Number'))

   myArray.push(getUserNumber)
   firstNumber = myArray[0]
   SecondNumber = myArray[1]
   thierdNumber = myArray[2]

   sumAllNumbers+= getUserNumber
  
   }

   for (let j = 0 ; (firstNumber / 10) != 0 ; j++){
        
        sumDigit += (firstNumber % 10)
        firstNumber = Math.floor(firstNumber / 10)
    }
    
alert('Sum Of FirstNumber Digis is : ' + sumDigit)           // Sum digits Of First Number

alert('The Muximum Number Is : ' + Math.max(firstNumber, SecondNumber, thierdNumber))  // Muximum Numbers

alert ('Sum Of all three Numbers Is : ' + sumAllNumbers)     // Sum of All Numbers

alert ('Square Of Second Number Is : ' + Math.sqrt(SecondNumber)) //Square Of Second Number
     








 

