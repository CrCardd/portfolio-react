// import { useState } from 'react'
import style from './App.module.css'
import Menu from './components/Menu.jsx'
import Apresentation from './components/Apresentation.jsx'
import arrow from './assets/seta.png'

function App() {

  return (
    <>
      <Menu about={'#apresentation'}/>
      <div className={style.resume}>

        <div className={style.resume_apresentation}>
          <h1>Soy Cristian</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis ducimus recusandae aliquam omnis a cum ex at repellendus</p>

        </div>

          <button className={style.button_arrow}>
            <img className={style.img_arrow} src={arrow} alt="seta.png" />
          </button>
      </div>

      <div id='apresentation'>
        <Apresentation/>
      </div>

      <div id='show_projects'>

      </div>






      

    </>
  )
}

export default App
