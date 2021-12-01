import React from 'react'

export function Score({points}) {
  return (
    <div className='score__container'>
      <h3>SCORE</h3>
      <p>{points}</p>
    </div>
  )
}
