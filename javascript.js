const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalProcess

const trafficLight = (event) => {
  stopProcess()
  var idLight = event.target.id
  turnOn[idLight]()
}

const nextIndex = () => {
  if (colorIndex < 2) {
    colorIndex++
  } else {
    colorIndex = 0
  }  
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[colorIndex]
  turnOn[color]()
  nextIndex()
}

const stopProcess = () => {
  clearInterval(intervalProcess)
}

const turnOn = {
  'red': () => img.src = 'vermelho.png',
  'yellow': () => img.src = 'amarelo.png',
  'green': () => img.src = 'verde.png',
  'automatic': () => intervalProcess = setInterval(changeColor, 1000),
  'stop': () => img.src = 'desligado.png'
}

buttons.addEventListener('click', trafficLight)