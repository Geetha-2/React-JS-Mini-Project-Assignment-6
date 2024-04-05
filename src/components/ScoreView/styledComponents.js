import styled from 'styled-components'

export const ScoreAndNamesContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: space-between;
  border: 2px solid #ffffff;
  border-radius: 8px;
  width: 80%;
`
export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 27px;
  color: #ffffff;
  font-weight: 400;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 130px;
  margin-right: 20px;

  @media screen and (min-width: 576px) {
    width: 150px;
  }
`
export const ScoreTextContent = styled.p`
  font-family: 'Bree Serif';
  font-size: 23px;
  color: #223a5f;
  font-weight: 500;
  margin-bottom: 5px;
`
export const ScoreNumTextContent = styled.p`
  font-family: 'Roboto';
  font-size: 45px;
  color: #223a5f;
  margin-top: 0px;
  text-align: center;
  font-weight: bold;
`
