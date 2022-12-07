let gameField = document.querySelector('.game-field')
let snake = document.createElement('div')
let stepInterval
<<<<<<< HEAD
let xCount = 0
let yCount = 300
let block
let blocks = []
=======
let downNumber = 300
let leftNumber = 0


>>>>>>> 6fb635a2c825c5a9aa7cf29bb054da08dc78fab6


function makeSnake() {
    snake.classList.add('snake')
    snake.style.top = '300px'
    snake.style.left = '0px'
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


<<<<<<< HEAD
function step(direction) {
    if (direction == 'left') { 
        if (snake.style.left == '0px') {
            xCount = 680
            snake.style.left = '680px'
        }
        xCount -= 20
        snake.style.left = xCount.toString() + 'px'
    }
    else if (direction == 'right') { 
        if (snake.style.left == '680px') {
            xCount = 0
            snake.style.left = '0px'
        }
        xCount += 20
        snake.style.left = xCount.toString() + 'px'
    }
    else if (direction == 'down') {
        if (snake.style.top == '680px') {
            yCount = 0
            snake.style.top = '0px'
        }
        yCount += 20
        snake.style.top = yCount.toString() + 'px'
    }
    else if (direction == 'up') {
        if (snake.style.top == '0px') {
            yCount = 680
            snake.style.top = '680px'
        }
        yCount -= 20
        snake.style.top = yCount.toString() + 'px'
    }
}
function turn(direction) {
    clearInterval(stepInterval)
    stepInterval = setInterval(() => {
        step(direction)
        addBlock(direction)
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
    
}

function checkDirection(direction) {
    if (direction == direction.prew) {
        console.log('ok')
    }
    if (block.added == true) {
    if (direction == 'left') {
        setTimeout(() =>
            block.style.left = (xCount +20).toString() + 'px'
        ,1000)
        }
        else if (direction == 'right') {
            block.style.left = (xCount + 20).toString() + 'px' 
        }
        else if (direction == 'up') {
            block.style.top = (yCount - 20).toString() + 'px' 
        }
        else if (direction == 'down') {
            block.style.top = (yCount + 20).toString() + 'px' 
        }
}
}

function addBlock(direction) {
    console.log('check')
        if (block.added == true) {
            if (direction == 'left') {
            block.style.left = (xCount +20).toString() + 'px' 
            }
            else if (direction == 'right') {
                block.style.left = (xCount + 20).toString() + 'px' 
            }
            else if (direction == 'up') {
                block.style.top = (yCount - 20).toString() + 'px' 
            }
            else if (direction == 'down') {
                block.style.top = (yCount + 20).toString() + 'px' 
            }
        }
        if (snake.style.left == block.style.left && snake.style.top == block.style.top) {
        block.added = true
      
    }
=======
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
>>>>>>> 6fb635a2c825c5a9aa7cf29bb054da08dc78fab6
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




    
document.addEventListener('keydown', (event) => {
    if (event.key == 'ArrowUp') {
        direction = 'up'
        turn(direction) 
        checkDirection(direction)
        
    }
    else if (event.key == 'ArrowRight') {
        direction = 'right'
        turn(direction)
        checkDirection(direction)
    }  
    else if (event.key == 'ArrowDown') {
        direction = 'down'
        turn(direction)
        checkDirection(direction)
    }
    else if (event.key == 'ArrowLeft') {
        direction = 'left'
        turn(direction)
        checkDirection(direction)
    }
})
makeSnake()
<<<<<<< HEAD
createBlock()
=======
moveRight()
>>>>>>> 6fb635a2c825c5a9aa7cf29bb054da08dc78fab6
