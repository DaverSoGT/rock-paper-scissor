import React from 'react'
import ReactDOM from 'react-dom'
import paper from '../assets/icon-paper.svg'
import rock from '../assets/icon-rock.svg'
import scissors from '../assets/icon-scissors.svg'
import '../styles/index.scss'
import '../styles/Game.scss'
import '../styles/Rules.scss'
import { Button } from './button'
import { Rules } from './Rules'
import { Header } from './Header'
import { GameBase } from './GameBase'
import { GameButton } from './GameButton'

function useLocalStorage(itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = React.useState(parsedItem)

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem)
    setItem(newItem)
  }

  return [
    item,
    saveItem
  ]
}

function Game() {
  const [showRules, setShowRules] = React.useState(false)
  const [score, saveScore] = useLocalStorage('SCORE_V1', '')
  const [points, setPoints] = React.useState(score === 0 ? 0 : score)
  const [hideButtons, setHideButtons] = React.useState(true)
  const [hideBase, setHideBase] = React.useState(false)
  const [hideResult, setHideResult] = React.useState(false)
  const [results, setResults] = React.useState(false)
  const [selectedButtonType, setSelectedButtonType] = React.useState()
  const [selectedButtonStyle, setSelectedButtonStyle] = React.useState('')
  const [showButton, setShowButton] = React.useState('empty-circle')
  const [styleCPUButton, setStyleCPUButton] = React.useState()
  const [state, setState] = React.useState()
  const [showResult, setShowResult] = React.useState(false)

  const options = [
    paper,
    scissors,
    rock
  ]
  
  const random = () => Math.floor(Math.random()*(max - min)) + min

  const max = 3
  const min = 0
  const numberCPU = random()
  let numberUser

  const openRules = () => {
    setShowRules(true)
  }

  const paperClick = () => {
    setHideButtons(false)
    setHideBase(true)
    setResults(true)
    setHideResult(true)
    setSelectedButtonStyle('paper')
    setSelectedButtonType(paper)
    choiceCPU()
    numberUser = 0
  }

  const rockClick = () => {
    setHideButtons(false)
    setHideBase(true)
    setResults(true)
    setHideResult(true)
    setSelectedButtonStyle('rock-clicked')
    setSelectedButtonType(rock)
    choiceCPU()
    numberUser = 2
  }

  const scissorsClick = () => {
    setHideButtons(false)
    setHideBase(true)
    setResults(true)
    setHideResult(true)
    setSelectedButtonStyle('scissors-clicked')
    setSelectedButtonType(scissors)
    choiceCPU()
    numberUser = 1
  }

  const choiceCPU = () => {
    setTimeout(() => {
      setHideBase(false)
      if (numberCPU === 0) {
        setShowButton(options[numberCPU])
        setStyleCPUButton('paper-cpu')
      }
      else if (numberCPU === 1) {
        setShowButton(options[numberCPU])
        setStyleCPUButton('scissors-cpu') 
      }
      else if (numberCPU === 2) {
        setShowButton(options[numberCPU])
        setStyleCPUButton('rock-cpu')
      }
      setTimeout(() => {
        if (numberCPU === numberUser) {
          setState('Draw')
          setShowResult(true)
        } else if (numberCPU === 0 && numberUser === 1) {
          setState('You Win')
          setShowResult(true)
          setPoints(points + 1)
        } else if (numberCPU === 0 && numberUser === 2) {
          setState('You Lose')
          setShowResult(true)
          setPoints(points === 0 ? 0 : points - 1)
        } else if (numberCPU === 1 && numberUser === 0) {
          setState('You Lose')
          setShowResult(true)
          setPoints(points === 0 ? 0 : points - 1)
        } else if (numberCPU === 1 && numberUser === 2) {
          setState('You Win')
          setShowResult(true)
          setPoints(points + 1)
        } else if (numberCPU === 2 && numberUser === 0) {
          setState('You Win')
          setShowResult(true)
          setPoints(points + 1)
        } else if (numberCPU === 2 && numberUser === 1) {
          setState('You Lose')
          setShowResult(true)
          setPoints(points === 0 ? 0 : points - 1)
        }
      }, 1000)
    }, 1500)
  }

  
  const comeBack = () => {
    setHideButtons(true)
    setHideBase(false)
    setHideResult(false)
    setResults(false)
    setSelectedButtonType()
    setSelectedButtonStyle('')
    setShowButton('empty-circle')
    setStyleCPUButton()
    setState()
    setShowResult(false)
  }

  React.useEffect(() => {
    saveScore(points)
  })
  
  return ReactDOM.createPortal(
    <section className='modal'>
      <Header points={points}/>
      {!!hideButtons &&(
        <GameBase>
          <GameButton hide={hideBase} event={paperClick} typeButton={paper} styleButton={'paper'}/>
          <GameButton hide={hideBase} event={rockClick} typeButton={rock} styleButton={'rock'}/>
          <GameButton hide={hideBase} event={scissorsClick} typeButton={scissors} styleButton={'scissors'}/>
        </GameBase>
      )}
      {!!results &&(
      <GameBase hide={hideResult}>
        <GameButton typeButton={selectedButtonType} styleButton={selectedButtonStyle}/>
        <p className='description left'>You Picked</p>
        <GameButton hide={hideBase} typeButton={showButton} styleButton={!styleCPUButton ? showButton : styleCPUButton}/>
        <p className='description right'>The CPU Picked</p>
        {!!showResult &&(
          <React.Fragment>
            <p className='result'>{state}</p>
            <Button status={comeBack} styleValue='light go-back' value='PLAY AGAIN'/>
          </React.Fragment>
        )}
      </GameBase>
      )}
      <Button value='RULES' styleValue='transparent' status={openRules}/>
      {!!showRules &&(
        <Rules showRules={showRules} setShowRules={setShowRules}/>
      )}
    </section>,
    document.getElementById('game')
  )
}

export { Game }