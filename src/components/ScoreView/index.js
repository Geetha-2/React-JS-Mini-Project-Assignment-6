import {
  ScoreAndNamesContainer,
  MainHeading,
  ScoreContainer,
  ScoreTextContent,
  ScoreNumTextContent,
} from './styledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreAndNamesContainer>
      <MainHeading>
        ROCK <br /> PAPER <br /> SCISSORS
      </MainHeading>
      <ScoreContainer>
        <ScoreTextContent>Score</ScoreTextContent>
        <ScoreNumTextContent>{score}</ScoreNumTextContent>
      </ScoreContainer>
    </ScoreAndNamesContainer>
  )
}

export default ScoreView
