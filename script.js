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
let timeArr = []

const startTime = () => {
	clearInterval(countTime)

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

const pauseTime = () => {
	clearInterval(countTime)
}

const stopTime = () => {
	timeWatch.textContent = `Ostatni czas: ${timeStop.textContent}`
	if (timeStop.textContent !== '0:00') {
		timeWatch.style.visibility = 'visible'
		timeArr.push(`${timeStop.textContent}`)
	}
	clearStuff()
}

const resetTime = () => {
	timeWatch.style.visibility = 'hidden'
	timeArr = []
	clearStuff()
}

const clearStuff = () => {
	timeStop.textContent = '0:00'
	timeList.textContent = ''
	minutes = 0
	seconds = 0
	clearInterval(countTime)
}

const showHistory = () => {
	timeList.textContent = ''
	let num = 1
	timeArr.forEach(time => {
		const newTime = document.createElement('li')
		newTime.innerHTML = `Pomiar ${num} <span>${time}</span>`
		timeList.appendChild(newTime)
		num++
	})
}

const showModal = () => {
	if (!(modalShadow.style.display === 'block')) {
		modalShadow.style.display = 'block'
	} else {
		modalShadow.style.display = 'none'
	}
	modalShadow.classList.toggle('modal-animation')
}

buttonStart.addEventListener('click', startTime)
buttonPause.addEventListener('click', pauseTime)
buttonStop.addEventListener('click', stopTime)
buttonReset.addEventListener('click', resetTime)
buttonHistory.addEventListener('click', showHistory)
buttonInfo.addEventListener('click', showModal)
closeModalBtn.addEventListener('click', showModal)
window.addEventListener('click', e => (e.target === modalShadow ? showModal() : false))
