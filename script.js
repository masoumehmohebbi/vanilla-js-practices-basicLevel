var carStore = [
	{id: 1, name: 'Bugatti', price: 5000000, color:'black'},
	{id: 2, name: 'Pagani HUAYRA BC', price: 3000000, color:'white'},
	{id: 3, name: 'Rolls Royse', price: 85000, color:'green'},
	{id: 4, name: 'Mercedes-Maybachive', price: 94000, color:'black'},
	{id: 5, name: 'Koenigsegg', price: 84000, color:'black'},
]

var filteredCarsColor = carStore.filter(function (car) {  //Finding The Items with black color
	return car.color === 'black'
})
// ////////
let blackCarsName = filteredCarsColor.map(car => {   	
return (car.name)
});
console.log('The Cars Name With Black Colour >>> ', blackCarsName)
// ////////////
let carsPrice=[]
let carsName=[]
filteredCarsColor.forEach(car => {
	carsPrice.push(car.price) 
	carsName.push(car.name)
});

const SortedLengthOfCarName = carsName.sort((a,b) => a.length - b.length);

console.log('Sorted Black Car Name with Length >>> ',SortedLengthOfCarName)
console.log('Sort with smallest first digit Of Black-Car Prices >>> ',carsPrice.sort())  
console.log('The Price Of Expensive Black-Car >>> ', Math.max(...carsPrice))    

