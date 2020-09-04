# Rock, Paper, Scissors
This is a web implementation of the popular hand game Rock, Paper, Scissors, Lizard, Spock. Built with HTML5, JavaScript (ES6) and SASS/SCSS.

## Getting Started
### Installation
- Clone this repository by running the terminal command `git clone git@github.com:bheki-maenetja/rock-paper-scissors.git`
- To install all necessary packages and modules run `npm i` in the terminal

### Deployment
- To run the game locally on your machine run `npm run start` in the terminal
- Alternatively, you can play the game online [here](https://bheki-maenetja.github.io/rock-paper-scissors/)

## Technology Used
- HTML5
- JavaScript (ES6)
- React
- SASS/SCSS
- NPM

## Overview
Rock, Paper, Scissors is a web game based on the popular hand game Rock, Paper, Scissors, Lizard, Spock. The player chooses their 'hand': rock, paper, scissors, lizard or spock. The computer then randomly chooses one the five options and the winner is decided according to the following rules:
[![Sheldon explains rock, paper, scissors, lizard, spock](http://img.youtube.com/vi/pIpmITBocfM/0.jpg)](http://www.youtube.com/watch?v=pIpmITBocfM "")

## Development
The game was built using the React 3 Javascript framework. It has only one component built from rudimentary, HTML/JSX and styled with SASS/SCSS. The gamplay is implemented with two functions: handleClick and getWinner. The handleClick function allows the user to make their choice whilst also enabling the computer to make its random choice. When both choices have been made the getWinner function is called; this function decides the winner based on the aforementioned rules of the game.
```
// The getWinner function

getWinner = (playerChoice, compChoice) => {
    const { player, computer } = this.state
    let winnerText, playerScore, compScore

    if (playerChoice === compChoice){
      winnerText = 'It\'s a tie 🤝'
      playerScore = player.score
      compScore = computer.score
      return [winnerText, playerScore, compScore]
    }
    
    const choiceTable = {
      'rock': ['lizard', 'scissors'],
      'paper': ['rock', 'spock'],
      'scissors': ['paper', 'lizard'],
      'lizard': ['paper', 'spock'],
      'spock': ['rock', 'scissors']
    }

    if (choiceTable[playerChoice].includes(compChoice)) {
      playerScore = player.score + 1
      compScore = computer.score
      winnerText = `${player.name} 😁`
    } else {
      compScore = computer.score + 1
      playerScore = player.score
      winnerText = `${computer.name} 🖥`
    }

    return [winnerText, playerScore, compScore]
  }
```

## Reflection
