let userFName= (prompt(' Enter Your First-Name \n It Can\'t Contain Digits: '))
let userLName= (prompt('Enter Your Last-Name \n It Can\'t Contain Digits: '))
let myArray = [userFName , userLName]
myArray = myArray.join('')

function stringContainsNumber(myArray){
let matchPattern =myArray.match(/\d+/g);

if (matchPattern != null) {
    return('Contain Digit, Try Again')
}
else {
    myArray = [userFName , userLName]
    myArray.unshift(myArray[1])
    myArray.pop()
    return('There Is No Digit' , myArray)
}

}
console.log( stringContainsNumber(myArray))
