let userFavoriteBook = prompt('Enter The Name Of Your Favorite book: ')
let myLibrary = ['Blindness', 'Wuthering Heights', userFavoriteBook]

isConsistWutheringHeights = myLibrary.includes('Wuthering Heights')
if (isConsistWutheringHeights === true) {
  console.log('Yes, There Is Wuthering Heights In The Library')
  console.log(myLibrary)
}else{
  console.log('Sorry,The Wuthering Heights Does not Exist In The Library')
}


let MyBooksCost = [
	{id: 1, name: 'Wuthering Heights', price: 200000},
	{id: 2, name: 'Blindness', price: 400000},
	{id: 3, name: 'Seeing', price: 250000},
	{id: 4, name: 'Suvashun', price: 450000}
]


let expensiveBooks = MyBooksCost.some(book =>{
  return book.price > 400000      //True
})

if (expensiveBooks === true) {
  console.log('The Books Are Expensive')
}else{
  console.log('The Books\'s Cost Are In Balance :)')
}

let cheapBooks = MyBooksCost.every(book =>{
  return book.price > 400000   //False
})

if (cheapBooks === true) {
  console.log('The Books Are Expensive')
}else{
  console.log('The Books\'s Cost Are In Balance :)')
}