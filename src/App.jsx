import React from 'react'
import './App.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Routes from './Routes'

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


        <main className="main container">

          <Routes />

        </main>
      </Router>
      <footer className="footer">
        footer
      </footer>
    </div>
  )
}

export default App;
