let gameField = document.querySelector('.game-field')
let snake = document.createElement('div')
let stepInterval
let downNumber = 300
let leftNumber = 0




function makeSnake () {
    snake.classList.add('snake')
    gameField.appendChild(snake)
    snake.style.left = 0
    snake.style.top = '300px'
}


function stepUp () {
    downNumber -= 20
    snake.style.top = downNumber.toString() + 'px'
    if (downNumber == 0) {
        downNumber = 680
        snake.style.bottom = 0
    }
    console.log(snake.style.top, downNumber)
}

function stepRight () {
    leftNumber +=20
    snake.style.left = leftNumber.toString() + 'px'
    if (leftNumber > 680) {
        leftNumber = 0
        snake.style.left = 0
    }
    console.log(snake.style.left, leftNumber)
}

function stepDown () {
    downNumber += 20
    snake.style.top = downNumber.toString() + 'px'
    if (downNumber == 680) {
        downNumber = 0
        snake.style.top = 0
    }
    console.log(snake.style.top, downNumber)
}

function stepLeft() {
    leftNumber -=20
    snake.style.left = leftNumber.toString() + 'px'
    if (leftNumber == 0) {
        leftNumber = 680
        snake.style.left = '680px'
    }
    console.log(snake.style.left, leftNumber)
}


function moveLeft () {
    clearInterval(stepInterval)
    stepInterval = setInterval(stepLeft, 500)  
}
function moveUp () {
    clearInterval(stepInterval)
    stepInterval = setInterval(stepUp, 500)
}
function moveRight () {
    clearInterval(stepInterval)
    stepInterval = setInterval(stepRight, 500)
}
function moveDown () {
    clearInterval(stepInterval)
    stepInterval = setInterval(stepDown, 500)
}

document.addEventListener('keydown', (event) => {
    if(event.key == 'ArrowUp' ) {
        moveUp()
    }
    else if(event.key == 'ArrowRight') {
        moveRight()
    }
    else if (event.key == 'ArrowDown') {
        moveDown()
    }
    else if (event.key == 'ArrowLeft') {
        moveLeft()
    }
})



makeSnake()
moveRight()