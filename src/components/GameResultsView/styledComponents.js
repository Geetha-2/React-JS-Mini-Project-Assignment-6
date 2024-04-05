import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  background-color: transparent;
  border: none;
  height: 150px;
  width: 150px;
  border-style: none;
  outline: none;

  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    height: 100px;
    width: 100px;
  }
`

export const ResultContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

export const ResultNameAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 45px;
  margin-left: 45px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`

export const ResultName = styled.p`
  font-family: 'Roboto';
  font-size: 25px;
  color: #ffffff;
`

export const Image = styled.img`
  width: 200px;
`

export const ResultMessage = styled(ResultName)`
  font-size: 35px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  border-radius: 13px;
  padding: 5px;
  font-family: 'Bree Serif';
  font-size: 15px;
  color: #223a5f;
  border: none;
  height: 45px;
  width: 200px;
  cursor: pointer;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
