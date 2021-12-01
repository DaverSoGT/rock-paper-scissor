import React from 'react'
import { Title } from './Title'
import { Score } from './Score'
import '../styles/Header.scss'

export function Header({ points }) {
  return (
    <div className='header__container'>
      <Title/>
      <Score points={points}/>
    </div>
  )
}
