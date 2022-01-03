let userBirthYear = +(prompt("What Is your \n \"BirhYear ?\""))
let UserAgeINCurrentYear = 1400 - userBirthYear;

(isNaN(userBirthYear)  ? alert('Your Number Is not True, Try Agian!') : 
(userBirthYear > 1400) ? alert ('This Year Doesn\'t Come Yet!!'):
(UserAgeINCurrentYear > 18) ? alert ('Welcome To LogIn Page :)'):
alert('Unfurtuently You Cannot LogIn')
)
