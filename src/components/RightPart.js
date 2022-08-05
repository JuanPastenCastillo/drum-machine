import React, { useEffect, useState } from "react"
import styled from "styled-components"

const RightPartStyled = styled.div`
  background-color: thistle;
  /* width: 50%; */
  flex: 1;
`

const CheckboxContainer = styled.label`
  display: inline-flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  /* border:1px red solid; */
  width: 100%;
`

const Checkbox = styled.input`
  height: 44px;
  width: 44px;
  appearance: none;
  border: 1px solid #34495e;
  border-radius: 4px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #41b883;
  cursor: pointer;
  margin: 0 5px 0 auto;

  &:checked {
    border: hsl(210, 28.8%, 28.6%);

    background-color: ${(x) => {
    if (x.onoff) {
      return "hsl(0, 86%, 40%)"
    }
    if (x.checkBox) {
      return "hsl(210, 28.8%, 48.6%)"
    }
  }};
  }
`

const Span = styled.span`
  color: #34495e;
  padding: 0.5rem 0.25rem;
  
  &:before{
    content: '\2713';
    display: block;
    text-align: center;
    color: #41B883;
    position: absolute;
    left: 0.7rem;
    top: 0.2rem;
  }
  
`

const RightPart = ({ keyPressed, getWhichBankUse, getOnOrOff }) => {
  const [whichBankUse, setWhichBankUse] = useState("bankOne")
  const [onOrOff, setOnOrOff] = useState(true)

  const changeBankToUse = (e) => {
    if (e.target.checked) {
      setWhichBankUse("bankTwo")
    } else {
      setWhichBankUse("bankOne")
    }
  }
  
  const onOff = () => {
    setOnOrOff(!onOrOff)
  }

  useEffect(() => {
    getWhichBankUse(whichBankUse)
  }, [whichBankUse])

  useEffect(() => {
    getOnOrOff(onOrOff)
  }, [onOrOff])

  return (
    <RightPartStyled>
      <CheckboxContainer>
        <Span>On/Off</Span>
        <Checkbox type="checkbox" onClick={onOff} onoff />
      </CheckboxContainer>
      <p>Key pressed: {keyPressed}</p>
      <p>Volume here</p>
      <CheckboxContainer>
        <Span>Change the bank sound</Span>
        <Checkbox type="checkbox" onClick={changeBankToUse} checkBox />
      </CheckboxContainer>
    </RightPartStyled>
  )
}

export default RightPart
