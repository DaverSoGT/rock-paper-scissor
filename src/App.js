import React from 'react'
import './styles/App.scss'
import { Button } from './components/button'
import { Game } from './components/Game'

function App() {
  const [openModal, setOpenModal] = React.useState(false)
  const [showButton, setShowButton] = React.useState(true)
  
  const openGame = () => {
    setOpenModal(true)
    setShowButton(false)
  }

  return (
    <React.Fragment>
      {!!showButton &&(
        <Button 
          value='START'
          status={openGame}
          styleValue='light'
        />
      )}
      {!!openModal &&(
        <Game/>
      )}
    </React.Fragment>
  )
}

export default App