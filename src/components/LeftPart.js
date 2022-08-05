import React, { useState, useEffect } from "react"
import styled from "styled-components"
import useSound from "use-sound"
import { bankOne, bankTwo } from "../sounds/indexSounds.js"

const LeftPartStyled = styled.div`
  background-color: hsl(179.2, 67.8%, 41.4%);
  /* width: 50%; */
  /* height:100%; */
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  /* flex-direction: row; */
  justify-content: center;
  /* align-items: center; */
  padding: 10px;

  & > div {
    background-color: hsl(179.2, 67.8%, 11.4%);
    color: snow;
    /* outline: 3px white solid; */
    margin: 5px;
    display: flex;
    flex: 0 0 30%;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 55px;
    border-radius: 10px;
    /* padding: 1px; */
    /* outline: none; */
    /* border:0; */
    cursor: pointer;
    user-select: none;

    /* transition: all 0.2s linear; */
  }
  & > div:active {
    background-color: rebeccapurple;
  }

  & > button {
    background-color: hsl(179.2, 67.8%, 11.4%);
    color: snow;
    /* outline: 3px white solid; */
    margin: 5px;
    display: flex;
    flex: 0 0 30%;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 55px;
    border-radius: 10px;
    /* padding: 1px; */
    /* outline: none; */
    /* border:0; */
    cursor: pointer;
    user-select: none;

    transition: all 0.1s linear;
  }
  & > button:active {
    background-color: rebeccapurple;
  }
`

const LeftPart = ({ getKeyPressed, whichBankUse, onOrOff }) => {
  console.log('onOrOff:', onOrOff)
  const [activeKey, setActiveKey] = useState("")

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let keyToUse = ["q", "w", "e", "a", "s", "d", "z", "x", "c"].some(
        (x) => x === e.key.toLowerCase()
      )

      if (keyToUse) {
        playSound(e.key.toUpperCase())
      }
    })
  }, [])

  const playSound = (selector) => {
    if (onOrOff) {
      let audio = document.getElementById(selector)
      audio.play()
      setActiveKey(selector)
    }


  }

  useEffect(() => {
    getKeyPressed(activeKey)
  }, [activeKey])

  return (
    <>
      <LeftPartStyled isclickedStyled="clicked">
        {whichBankUse === "bankOne" ? (
          bankOne().map((x) => (
            <div key={x.url} onClick={() => {
              playSound(x.keyTrigger)
            }} id={x.url}>
              <p>{x.keyTrigger}</p>
              <audio src={x.url} id={x.keyTrigger}></audio>
            </div>
          ))
        ) : (
          bankTwo().map((x) => (
            <div key={x.url} onClick={() => {
              playSound(x.keyTrigger)
            }} id={x.url}>
              <p>{x.keyTrigger}</p>
              <audio src={x.url} id={x.keyTrigger}></audio>
            </div>
          ))
        )}
      </LeftPartStyled>
    </>
  )
}

export default LeftPart
