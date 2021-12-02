import React from 'react'
import base from '../assets/bg-triangle.svg'
import paper from '../assets/icon-paper.svg'
import rock from '../assets/icon-rock.svg'
import scissors from '../assets/icon-scissors.svg'
import '../styles/GameBase.scss'
import { GameButton } from './GameButton'

export function GameBase() {
  return (
    <div className='buttons__container'>
      <img src={base} alt='base buttons' className='buttons__base'/>
      <GameButton typeButton={paper} styleButton={'paper'}/>
      <GameButton typeButton={rock} styleButton={'rock'}/>
      <GameButton typeButton={scissors} styleButton={'scissors'}/>
    </div>
  )
}
