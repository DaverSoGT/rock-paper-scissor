import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Game.scss'
import { Button } from './button'
import { Rules } from './Rules'
import '../styles/Rules.scss'

function Game() {
  const [showRules, setShowRules] = React.useState(false)

  const openRules = () => {
    setShowRules(true)
  }

  return ReactDOM.createPortal(
    <section className='modal'>
      <Button value='RULES' styleValue='transparent' status={openRules}/>
      {!!showRules &&(
        <Rules showRules={showRules} setShowRules={setShowRules}/>
      )}
    </section>,
    document.getElementById('game')
  )
}

export { Game }