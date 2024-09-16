// import { useState } from 'react'
import Menu from './components/Menu.jsx'
import style from './App.module.css'

function App() {

  return (
    <>
      <Menu/>
      <div className={style.resume}>

        <div className={style.apresentation}>
          <h1>Soy Cristian</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ducimus recusandae aliquam omnis a cum ex at repellendus</p>
        </div>

      </div>
    </>
  )
}

export default App
