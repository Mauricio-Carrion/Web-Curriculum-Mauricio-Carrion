import React from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Routes from './Routes'
import { FaReact } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <h3>Maurício Carrion</h3>
          <nav className="nav">
            <li>
              <NavLink to='/'>
                Início
              </NavLink>
            </li>

            <li>
              <NavLink to='/biografia'>
                Biografia
              </NavLink>
            </li>

            <li>
              <NavLink to='/experiencias'>
                Experiências
              </NavLink>
            </li>

            <li>
              <NavLink to='/formacao'>
                Profissional
              </NavLink>
            </li>

            <li>
              <NavLink to='/skills'>
                Skills
              </NavLink>
            </li>
          </nav>
        </header>


        <main className="main">

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
    </div>
  )
}

export default App;
