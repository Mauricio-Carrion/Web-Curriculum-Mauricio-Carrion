import React from 'react'
import './App.css'
import { HashRouter as Router, NavLink } from 'react-router-dom'
import Routes from './Routes'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
import { ImMenu } from 'react-icons/im'

function App() {
  const handleMainClick = () => {
    const nav = document.querySelector('.nav')
    if (nav.classList.contains('showNav')) {
      handleToggle()
    }
  }

  const handleToggle = () => {
    const nav = document.querySelector('.nav')
    nav.classList.toggle('showNav')
  }

  return (
    <div className="App">
      <Router>
        <header className="header">
          <div>
            <h3>Maurício Carrion</h3>
            <ImMenu className='iconWhite' onClick={handleToggle} />
          </div>
          <nav className="nav">
            <NavLink to='/'>
              Início
            </NavLink>

            <NavLink to='/biografia'>
              Biografia
            </NavLink>

            <NavLink to='/experiencias'>
              Experiências
            </NavLink>

            <NavLink to='/formacao'>
              Cursos
            </NavLink>

            <NavLink to='/skills'>
              Skills
            </NavLink>
          </nav>
        </header>


        <main className="main" onTouchStart={handleMainClick}>

          <Routes />

        </main>
      </Router>
      <footer className="footer">
        <h4>Desenvolvido com</h4>
        <FaReact className='react' />
        <SiJavascript className='javascript' />
        <SiHtml5 className='html' />
        <SiCss3 className='css' />
        <h4>por Maurício Carrion</h4>
      </footer>
    </div >
  )
}

export default App;
