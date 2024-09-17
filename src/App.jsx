import style from './App.module.css'
import { useState } from 'react'

import background from './assets/background_back.png'

import Resume from './components/resume.jsx'
import Menu from './components/menu.jsx'
import Apresentation from './components/apresentation.jsx'
import Show_projects from './components/show_projects.jsx'
import Contact from './components/contact.jsx'

function App() {
  
  const [show, setShow] = useState(false)

  return (
    <>
      <img className={style.background} src={background} alt="background" />

      <Menu home={'#resume'} about={'#apresentation'} works={'#show_projects'} contact={'#contact'}/>
      <div id='resume' className={style.resume}>
        <Resume show={() => setShow(true)}/>
      </div>
      
      { show && 
        <>  
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
      }

    </>
  )
}

export default App
