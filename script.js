let userNumber = +(prompt('Enter Your number',0))
let counter = 0
let i = 0

do {
    i++;
    counter++;
    userNumber = Math.floor(userNumber / 10);
    
} while (userNumber  / 10 !=0);

alert(counter)
