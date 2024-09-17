// import { useState } from 'react'
import style from './App.module.css'

import arrow from './assets/seta.png'

import Menu from './components/Menu.jsx'
import Apresentation from './components/Apresentation.jsx'
import Show_projects from './components/Show_projects.jsx'
import Contact from './components/contact.jsx'

function App() {

  return (
    <>
      <Menu home={'#resume'} about={'#apresentation'} works={'#show_projects'}/>
      <div id='resume' className={style.resume}>

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
        <Show_projects/>
      </div>

      <div id='contact'>
        <Contact/>
      </div>

      






      

    </>
  )
}

export default App
