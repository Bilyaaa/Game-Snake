let gameField = document.querySelector('.game-field')
let snake = document.createElement('div')

let stepInterval
let rightNumber


function makeSnake () {
    snake.classList.add('snake')
    gameField.appendChild(snake)
}


function moveLeft () {
    stepInterval = setInterval()
    console.log(snake.style.width)
}

makeSnake()
moveLeft()