import style from './App.module.css'

import Resume from './components/resume.jsx'
import Menu from './components/menu.jsx'
import Apresentation from './components/apresentation.jsx'
import Show_projects from './components/show_projects.jsx'
import Contact from './components/contact.jsx'

function App() {

  return (
    <>
      <Menu home={'#resume'} about={'#apresentation'} works={'#show_projects'}/>
      <div id='resume' className={style.resume}>
        <Resume/>
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
