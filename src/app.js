import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'

class App extends React.Component {
  state = {
    player: {
      choice: '',
      name: 'Player',
      score: 0
    },
    computer: {
      choice: '',
      name: 'Computer',
      score: 0
    },
    choices: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
    winner: ''
  }

  handleClick = (e) => {
    const playerChoice = e.target.innerHTML
    const compChoice = this.state.choices[Math.floor(Math.random() * 5)]
    const result = this.getWinner(playerChoice, compChoice)
    this.setState({ player: { ...this.state.player, choice: playerChoice, score: result[1] }, computer: { ...this.state.computer, choice: compChoice, score: result[2] }, winner: result[0] })
  }

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

  resetGame = () => {
    this.setState({ ...this.state, player: { ...this.state.player, choice: '', score: 0 }, computer: { ...this.state.computer, choice: '', score: 0 }, winner: '' })
  }

  render() {
    return (
      <>
      <main>
        <div className="game-container">
          <h1>🗿 📄 ✂️ 🦎 🖖🏻</h1>
          <p>Computer Choice: <span>{this.state.computer.choice}</span></p>
          <p>Player Choice: <span>{this.state.player.choice}</span></p>
          <p>Winner: <span>{this.state.winner}</span></p>
          <div className="button-container">
            {this.state.choices.map((choice, i) => <a href="#" key={i} onClick={this.handleClick}>{choice}</a>)}
            <a href="#" onClick={this.resetGame}>Reset</a>
          </div>
          <p className="scoreboard">Player <span>{this.state.player.score}</span> - <span>{this.state.computer.score}</span> Computer</p>
        </div>
      </main>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)