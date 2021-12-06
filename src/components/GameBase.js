import React from 'react'
import '../styles/GameBase.scss'

export function GameBase({ hide, children }) {
  return (
    <div className={!hide ? 'background buttons__container' : 'buttons__container'}>
      { children }
    </div>
  )
}