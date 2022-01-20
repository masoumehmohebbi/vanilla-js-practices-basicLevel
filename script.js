let userName= prompt('Enter the \'666\' ')
let myArray=[
  {id:1 , name: '369'},
  {id:2 , name: '40'},
  {id:3 , name: '27'},
  {id:4 , name: userName},
]
  if(userName === '666'){
      let isInMyArray = myArray.findIndex(name =>{
      return (name.name === '666')
  })
      myArray.splice(isInMyArray, 1)
      console.log(myArray)
  }else{
      console.log('No There Is Not The Name With 666 In myArray',myArray)
  }

