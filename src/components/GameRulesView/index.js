import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'
import {
  RulesCont,
  RulesImage,
  CloseButton,
  ModalContainer,
} from './styledComponents'

const GameRulesView = () => (
  <>
    <Popup modal trigger={<RulesCont>RULES</RulesCont>}>
      {close => (
        <>
          <ModalContainer>
            <CloseButton onClick={() => close()}>
              <RiCloseLine size={15} color="#231f20" />
            </CloseButton>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ModalContainer>
        </>
      )}
    </Popup>
  </>
)

export default GameRulesView
