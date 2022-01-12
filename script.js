const getUserPrice = +(prompt('Enter The Price Of The Tablet: '))
let sum =0
let avg 

const MyArray = [
	{id: 1, name: 'Pc', price: 42000000},
	{id: 2, name: 'Laptop', price: 30000000},
	{id: 3, name: 'Phone', price: 12000},
	{id: 4, name: 'Tablet', price: getUserPrice}
]


MyArray.forEach(price =>{
  sum+=price.price;
  avg= sum/MyArray.length
})

let IsPhone = MyArray.some(item =>{
  if (item.name === 'Phone') {
    return true
  }
})

if (IsPhone === true) {
  console.log('Yes there is the phone in your Array')
}else{
  console.log('No there is Not the phone in your Array')
}

console.log(MyArray)
console.log('Average Of My Prices Is: ', avg)