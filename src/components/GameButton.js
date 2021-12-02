import React from 'react'
import '../styles/GameButton.scss'

export function GameButton({ typeButton, styleButton }) {
  return (
    <div className={`buttons__button ${styleButton}`}>
      <img src={typeButton} alt={`${typeButton} icon`}/>
    </div>
  )
}
