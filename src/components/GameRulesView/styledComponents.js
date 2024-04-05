import styled from 'styled-components'

export const RulesCont = styled.button`
  background-color: #ffffff;
  padding: 4px;
  border-radius: 6px;
  width: 100px;
  height: 50px;
  font-family: 'Bree Serif';
  font-size: 15px;
  color: #223a5f;
  text-align: center;
  border: none;
  cursor: pointer;
  align-self: flex-end;

  @media screen and (min-width: 576px) {
    margin-right: 0px;
    padding: 0px;
  }
`

export const RulesImage = styled.img`
  width: 100%;
  height: 85%;
  margin-top: auto;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vw;
  padding: 10px;

  @media screen and (max-width: 576px) {
    height: 270px;
    width: 100%;
  }
`
export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: #fffffff39;
  width: 30px;
  height: 30px;
  border: none;
  margin-top: 5px;
  margin-bottom: 15px;
  outline: none;
  cursor: pointer;
`
