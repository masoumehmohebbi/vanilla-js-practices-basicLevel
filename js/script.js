let stringArray=["Hello","This", "Is", "Your", "Website"],
    textBox = document.querySelector('p'),
    i =0

let timer = setInterval(() => {
	textBox.append(stringArray[i] + " ")
	i++
	if (i > stringArray.length){
		i = 0
		textBox.innerHTML=""
	}
}, 1000);