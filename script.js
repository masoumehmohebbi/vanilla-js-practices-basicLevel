let userArray = prompt('Enter Your String : ')      // "Masoume" |string
userArray= (userArray.split(''))                  //["M", "a", "s", "u","m","e"]  |convrt to Array
let ArrayLowerCase

let isArray = (Array.isArray(userArray))       //true   
if (isArray) {	   					    	  //check for being an array
	
	console.log(('Your Array >>> ', userArray))

	
	ArrayLowerCase = userArray.join('').toLowerCase().split('') //convert To LowerCase
	
	if ((ArrayLowerCase.indexOf("m"))=== -1) {
		console.log('There Isn\'t the characters Of M in Your String')
	}else{
		console.log(ArrayLowerCase.indexOf('m'))
	}

	
(userArray.length > 2) ? console.table("The Last Two characters >>>", userArray.slice(-2).join('')): null
	
}


