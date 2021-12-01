import React from 'react'
import '../styles/Button.scss'

function Button({ value, status, styleValue, openRules }) {
  return (
    <button
      type='button'
      onClick={status}
      className={styleValue}
    >
      {value}
    </button>
  )
}

export { Button }