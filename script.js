let gameField = document.querySelector('.game-field')
let snake = document.createElement('div')
let stepInterval
let xCount = 0
let yCount = 300
let block
let blocks = []
let prevDirection


function makeSnake() {
    snake.classList.add('snake')
    snake.style.top = '300px'
    snake.style.left = '0px'
    gameField.appendChild(snake)
    snake.style.left = 0
    snake.style.top = '300px'
}


function stepUp() {
    if (snake.style.top == '0px') {
        yCount = 680
        snake.style.top = '680px'
    }
    yCount -= 20
    snake.style.top = yCount.toString() + 'px'
}
function blockStepUp() {
    if (block.style.top == '0px') {
        yCount = 680
        block.style.top = '680px'
    }
    yCount -= 20
    block.style.top = yCount.toString() + 'px'
}
function stepRight() {
    if (snake.style.left == '680px') {
        xCount = 0
        snake.style.left = '0px'
    }
    xCount += 20
    snake.style.left = xCount.toString() + 'px'
}
function blockStepRight() {
    if (block.style.left == '680px') {
        xCount = 0
        block.style.left = '0px'
    }
    xCount += 20
    block.style.left = xCount.toString() + 'px'
}
function stepDown() {
    if (snake.style.top == '680px') {
        yCount = 0
        snake.style.top = '0px'
    }
    yCount += 20
    snake.style.top = yCount.toString() + 'px'
}
function blockStepDown() {
    if (block.style.top == '680px') {
        yCount = 0
        block.style.top = '0px'
    }
    yCount += 20
    block.style.top = yCount.toString() + 'px'
}
function stepLeft() {
    if (snake.style.left == '0px') {
        xCount = 680
        snake.style.left = '680px'
    }
    xCount -= 20
    snake.style.left = xCount.toString() + 'px'
}
function blockStepLeft() {
    if (block.style.left == '0px') {
        xCount = 680
        block.style.left = '680px'
    }
    xCount -= 20
    block.style.left = xCount.toString() + 'px'
}


function step(direction) {
    if (direction == 'left') { 
        stepLeft()
    }
    else if (direction == 'right') { 
        stepRight()
    }
    else if (direction == 'down') {
       stepDown()
    }
    else if (direction == 'up') {
    stepUp()
    }
}
function blockStep(direction) {
    prevDirection == direction ? console.log(prevDirection, direction) : console.log(prevDirection, direction)
    if (direction == 'left') { 
        blockStepLeft()
    }
    else if (direction == 'right') { 
        blockStepRight()
    }
    else if (direction == 'down') {
        blockStepDown()
    }
    else if (direction == 'up') {
        blockStepUp()
    }
    prevDirection = direction
}



function makeChane(direction) {
    snake.style.left == block.style.left && snake.style.top == block.style.top ?  (blockStep(direction), block.connected = true)  : null    
    block.connected == true ? blockStep(direction) : null
}



function move(direction) {
    clearInterval(stepInterval)
    stepInterval = setInterval(() => {
        makeChane(direction)
        step(direction)
    }, 500)
}








function getRandomNumber() {
    min = Math.ceil(0);
    max = Math.floor(700);
    timeOut = Math.floor(Math.random() * (max - min)) + min;
    timeOut = (timeOut / 20).toFixed(0) * 20
}

function createBlock() {
    block = document.createElement('div')
    gameField.appendChild(block)
    block.style.position = 'absolute'
    block.classList.add('block')
    getRandomNumber()
    block.style.top = timeOut.toString() + 'px'
    getRandomNumber()
    block.style.left = timeOut.toString() + 'px'
    blocks.push(block)   
    if (snake.style.left == block.style.left && snake.style.top == block.style.top) {
        console.log('ok');
    }
}

  
document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        direction = 'up'
        move(direction)        
    }
    else if (event.key == 'ArrowRight') {
        direction = 'right'
        move(direction)
    }  
    else if (event.key == 'ArrowDown') {
        direction = 'down'
        move(direction)
    }
    else if (event.key == 'ArrowLeft') {
        direction = 'left'
        move(direction)
    }
})
makeSnake()
createBlock()
