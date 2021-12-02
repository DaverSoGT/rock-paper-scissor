import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Game.scss'
import '../styles/Rules.scss'
import { Button } from './button'
import { Rules } from './Rules'
import { Header } from './Header'
import { GameBase } from './GameBase'

function Game() {
  const [showRules, setShowRules] = React.useState(false)
  const [points, setPoints] = React.useState(12)

  const openRules = () => {
    setShowRules(true)
  }

  return ReactDOM.createPortal(
    <section className='modal'>
      <Header points={points}/>
      <GameBase/>
      <Button value='RULES' styleValue='transparent' status={openRules}/>
      {!!showRules &&(
        <Rules showRules={showRules} setShowRules={setShowRules}/>
      )}
    </section>,
    document.getElementById('game')
  )
}

export { Game }