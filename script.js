const buttonStart = document.querySelector('.start')
const buttonStop = document.querySelector('.stop')
const buttonPause = document.querySelector('.pause')
const buttonReset = document.querySelector('.reset')
const buttonHistory = document.querySelector('.history')
const timeWatch = document.querySelector('.time')
const timeStop = document.querySelector('.stopWatch')
const timeList = document.querySelector('.time-list')
const buttonInfo = document.querySelector('.info')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')

let minutes = 0
let seconds = 0
let countTime

const startTime = () => {
	countTime = setInterval(() => {
		if (seconds < 9) {
			seconds++
			timeStop.textContent = `${minutes}:0${seconds}`
		} else if (seconds >= 9 && seconds < 59) {
			seconds++
			timeStop.textContent = `${minutes}:${seconds}`
		} else {
			minutes++
			seconds = 0
			timeStop.textContent = `${minutes}:00`
		}
	}, 1000)
}

buttonStart.addEventListener('click', startTime)
