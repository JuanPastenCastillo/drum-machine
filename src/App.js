import React, {useState} from "react"
import styled from "styled-components"
import LeftPart from "./components/LeftPart.js"
import RightPart from "./components/RightPart.js"
import { LogoMusic } from "./utils/iconsIndex.js"

const AllWraper = styled.div`
  background-color: hsl(220, 13%, 18%);
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const MainBoxContainer = styled.div`
  background-color: hsl(220, 13%, 38%);
  display: flex;
  width: 800px;
  flex-direction: column;
`
const Header = styled.div`
  background-color: snow;
  margin-left: auto;
  color:black;
`
const MainContent = styled.div`
  background-color: red;
  color: black;
  display: flex;
`

export const userContext = React.createContext()

function App() {
  const [getLeftKeyPressed, setGetLeftKeyPressed] = useState("")
  const [getRightBankUse, setGetRightBankUse] = useState("")
  const [haveToPlay, setHaveToPlay] = useState() 
  
  const spyLeftPart = (getKeyPressed = getLeftKeyPressed) => {
    setGetLeftKeyPressed(getKeyPressed)
  }
  
  const spyRightPart = (bankToUse = getRightBankUse) => {
    setGetRightBankUse(bankToUse)
  }
  
  const isOnOrOff = (onOrOff = haveToPlay) => { 
    setHaveToPlay(onOrOff)
  }
  
  
  return (
    <AllWraper>
      <MainBoxContainer>
        <Header>
          Header!
          <LogoMusic />
        </Header>

        <MainContent>
          <LeftPart getKeyPressed={spyLeftPart} whichBankUse={getRightBankUse} onOrOff={haveToPlay} /> 
          
          <RightPart keyPressed={getLeftKeyPressed} getWhichBankUse={spyRightPart} getOnOrOff={isOnOrOff}  /> 
        </MainContent>
      </MainBoxContainer>
    </AllWraper>
  )
}

export default App
