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

function Game() {
  const [showRules, setShowRules] = React.useState(false)
  const [points, setPoints] = React.useState(12)
  const [hideButtons, setHideButtons] = React.useState(true)
  const [hideBase, setHideBase] = React.useState(false)
  const [hideResult, setHideResult] = React.useState(false)
  const [results, setResults] = React.useState(false)
  const [selectedButtonType, setSelectedButtonType] = React.useState()
  const [selectedButtonStyle, setSelectedButtonStyle] = React.useState('')
  const [showButton, setShowButton] = React.useState('empty-circle')
  const [styleCPUButton, setStyleCPUButton] = React.useState()

  const options = [
    paper,
    scissors,
    rock
  ]

  const max = 3
  const min = 0

  const random = () => Math.floor(Math.random()*(max - min)) + min

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
  }

  const rockClick = () => {
    setHideButtons(false)
    setHideBase(true)
    setResults(true)
    setHideResult(true)
    setSelectedButtonStyle('rock-clicked')
    setSelectedButtonType(rock)
    choiceCPU()
  }

  const scissorsClick = () => {
    setHideButtons(false)
    setHideBase(true)
    setResults(true)
    setHideResult(true)
    setSelectedButtonStyle('scissors-clicked')
    setSelectedButtonType(scissors)
    choiceCPU()
  }

  const choiceCPU = () => {
    setTimeout(() => {
      setHideBase(false)
      const number = random()
      if (number === 0) {
        setShowButton(options[number])
        setStyleCPUButton('paper-cpu')
      }
      else if (number === 1) {
        setShowButton(options[number])
        setStyleCPUButton('scissors-cpu') 
      }
      else if (number === 2) {
        setShowButton(options[number])
        setStyleCPUButton('rock-cpu')
      }
    }, 1500)
  }

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