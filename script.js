
let studentName = prompt('Enter your Name')



while (true) {
    let matchPattern = studentName.match(/\d+/g);
    if (matchPattern != null) {
     studentName = prompt('Sorry,Your Name Cannot Contain Digits \n Try Again')
    }else{
       
       break
    }
}


let students=[
{id:1, 
name: studentName,
major:'softwareEngineer',
sememter:5},
]

console.log(students)


