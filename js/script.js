
let timerText = document.querySelector('p')
let i=0



let timer = setInterval(() => {

	i++
	timerText.innerHTML = i;

	if (timerText.innerHTML >= 4) {
		clearInterval(timer)
		timerText.innerHTML =" "
	}


}, 1000);

setTimeout(() => {
	timerText.innerHTML = "GO!"
}, 5000);