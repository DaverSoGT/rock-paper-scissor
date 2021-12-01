import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Rules.scss'
import imgRules from '../assets/image-rules.svg'
import imgIcon from '../assets/icon-close.svg'
import { Button } from './button'

export function Rules({ setShowRules }) {
  const closeRules = () => {
    setShowRules(false)
  }

  return ReactDOM.createPortal(
    <section className='rules'>
      <h1>RULES</h1>
      <img src={imgRules} alt='rules'/>
      <Button value='' styleValue='close' status={closeRules}>
        <img src={imgIcon} alt='close-icon'></img>
      </Button>
    </section>,
    document.getElementById('rules')
  )
}
