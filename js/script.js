let myObj = {
	a:[5, 10],
	b:[4,5,9],
	c:[7,10,4],
}
let user= prompt('Enter A or B or C')
let userNumber= +prompt('Guess a Number')
let userObj = (myObj[user])
let findNumber

switch (user) {
	case 'a':
	case 'b':
	case 'c':
		findNumberFunc()
		userFunc()
		break;

	default:
		tryAgainFunc()
		break;	
}

function findNumberFunc() {
	 findNumber= userObj.find(number =>{
		return number === userNumber
	})
}

function userFunc() {
	if (findNumber === undefined) {
		alert('Sorry, There is Not '+ userNumber +' In >>> ' + userObj)
	}else{
		alert('Yes, There is '+ findNumber +' In >>> ' + userObj)
	}
}

function tryAgainFunc() {
	while (true) {
		alert('Choose The Right Option')
		 user= prompt('Enter A or B or C')
		userNumber= +prompt('Guess a Number')
		userObj = (myObj[user])
		findNumberFunc()
		userFunc()
		break;
	}
}