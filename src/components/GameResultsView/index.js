import {
  GameViewContainer,
  GameButton,
  GameImage,
  ResultContainer,
  ResultNameAndImageContainer,
  ResultName,
  Image,
  ResultMessage,
  MessageContainer,
  PlayAgainButton,
} from './styledComponents'

const GameResultsView = props => {
  const {
    choicesList,
    resultMessage,
    isShow,
    checkResult,
    restartGame,
    myChoiceAndOpponentChoice,
  } = props

  const GameScoreView = () => (
    <GameViewContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              key={choicesList[0].id}
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              key={choicesList[1].id}
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
            />
          </GameButton>

          <GameButton
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              key={choicesList[2].id}
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
            />
          </GameButton>
        </>
      )}

      {!isShow && (
        <>
          <ResultContainer>
            <ResultNameAndImageContainer>
              <ResultName>YOU</ResultName>
              <Image
                src={myChoiceAndOpponentChoice[0].imageUrl}
                alt="your choice"
              />
            </ResultNameAndImageContainer>
            <ResultNameAndImageContainer>
              <ResultName>OPPONENT</ResultName>
              <Image
                src={myChoiceAndOpponentChoice[1].imageUrl}
                alt="opponent choice"
              />
            </ResultNameAndImageContainer>
          </ResultContainer>
          <MessageContainer>
            <ResultMessage>{resultMessage}</ResultMessage>
            <PlayAgainButton type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainButton>
          </MessageContainer>
        </>
      )}
    </GameViewContainer>
  )

  return GameScoreView()
}

export default GameResultsView
