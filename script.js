let myObj = {
	a:[5, 10],
	b:[4,5,9],
	c:[7,10,4],
}
let user= prompt('Enter A or B or C')
let userOperator= prompt('Enter + Or -')
let userObj = (myObj[user])
let sum = 0
let minus = 0
let power

// Plus
if (userOperator === '+') {
	userObj.forEach(element => {
	sum+=element
});
	console.log(userObj)
	console.log('Sum >>> ',sum)
}
// Minus
if (userOperator === '-') {
	userObj.forEach(element => {
	minus=element - minus
});
    console.log(userObj)
	console.log('Minus >>> ',minus)
}

