// A simple Rock Paper Scissors game implementation

const computerChoiceDisplay = document.getElementById('computer-choice')
const playerChoice = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    playerChoice.innerHTML = userChoice

    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)
    
    if(randomNumber === 1) {
        computerChoice = 'Rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'Paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!'
    }

    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You win!'
    }

    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You lost!'
    }

    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You win!'
    }

    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You lost!'
    }

    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You win!'
    }

    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You lost!'
    }

    resultDisplay.innerHTML = result
}