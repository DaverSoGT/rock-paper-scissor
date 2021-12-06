import React from 'react'
import '../styles/GameButton.scss'

export function GameButton({hide, event, typeButton, styleButton }) {
  return (
    <div onClick={event} className={`buttons__button ${styleButton}`}>
      {!hide &&(
        <img src={typeButton} alt={`${typeButton} icon`}/>
      )}
    </div>
  )
}
