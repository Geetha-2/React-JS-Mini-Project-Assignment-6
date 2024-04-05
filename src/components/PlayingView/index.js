import {Component} from 'react'

import ScoreView from '../ScoreView'
import GameRulesView from '../GameRulesView'
import GameResultsView from '../GameResultsView'

import {GameBgContainer, RulesContainer} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    isShow: true,
    myChoiceAndOpponentChoice: [choicesList[0], choicesList[1]],
    resultMessage: 'YOU WON',
  }

  getResult = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (choice1.id === 'PAPER') {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const {score} = this.state

    const myChoice = choicesList.filter(eachList => eachList.id === id)

    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    const resultMessage = this.getResult(myChoice[0], opponentChoice)

    let updatedScore = score

    if (resultMessage === 'YOU WON') {
      updatedScore = score + 1
    } else if (resultMessage === 'YOU LOSE') {
      updatedScore = score - 1
    } else {
      updatedScore = score
    }

    this.setState({
      isShow: false,
      score: updatedScore,
      resultMessage,
      myChoiceAndOpponentChoice: [myChoice[0], opponentChoice],
    })
  }

  restartGame = () =>
    this.setState({
      isShow: true,
    })

  render() {
    const {score, myChoiceAndOpponentChoice, resultMessage, isShow} = this.state

    return (
      <GameBgContainer>
        <ScoreView score={score} />

        <GameResultsView
          choicesList={choicesList}
          resultMessage={resultMessage}
          isShow={isShow}
          myChoiceAndOpponentChoice={myChoiceAndOpponentChoice}
          checkResult={this.checkResult}
          restartGame={this.restartGame}
        />

        <RulesContainer>
          <GameRulesView />
        </RulesContainer>
      </GameBgContainer>
    )
  }
}

export default PlayingView
