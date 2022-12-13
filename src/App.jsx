import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          {/* <li>
            <NavLink to={'/'}>
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to={'/biografia'}>
              Biografia
            </NavLink>
          </li>

          <li>
            <NavLink to={'/experiencias'}>
              Experiências
            </NavLink>
          </li>

          <li>
            <NavLink to={'/formacao'}>
              Formação Profissional
            </NavLink>
          </li>

          <li>
            <NavLink to={'/skills'}>
              Skills
            </NavLink>
          </li> */}
        </nav>
      </header>

      <main className="main">
        <Routes />
      </main>

      <footer className="footer">
        footer
      </footer>
    </div>
  )
}

export default App;
