let userNumber = 0
let myArray = []
let userFirstNumber
let userThirdNumber

while (userNumber != -1) {
    userNumber = +(prompt('Enter The Numbers' , 0))

    myArray.push(userNumber)
    userFirstNumber=myArray[0]
    userThirdNumber=myArray[2]
    

    if (userNumber != -1){

    if (userNumber % 2 != 0){
        alert(userNumber + ' Is Odd')
    }else{
        alert(userNumber + ' Is Even')
    }
    }
}


if (oddNumersBetweenTwoNum()){
    userFirstNumber++
        while (userFirstNumber < userThirdNumber) {
            console.log('The Odd Numbers between '+userFirstNumber , 'and ' ,  userThirdNumber ,' is ', userFirstNumber)
            userFirstNumber+= 2}
}else{
    while (userFirstNumber < userThirdNumber) {
        userFirstNumber+=2
        console.log('The Odd Numbers between '+userFirstNumber , 'and ' ,  userThirdNumber ,' is ', userFirstNumber)
    }
}

function oddNumersBetweenTwoNum() {
    if (userFirstNumber % 2 === 0){
        return true
        
    }else{
        return false
     
    }
}