import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Inicio from "./components/Inicio"
import Biografia from "./components/Biografia"
import Experiencias from "./components/Experiencias"
import FormPro from "./components/FormPro"
import Skills from "./components/Skills"

export default () => {
  return (
    <Router>
      <Route exact path='/inicio' element={<Inicio />} />
      <Route exact path='/biografia' element={<Biografia />} />
      <Route exact path='/experiencias' element={<Experiencias />} />
      <Route exact path='/formacao' element={<FormPro />} />
      <Route exact path='/skills' element={<Skills />} />
    </Router >
  )
}
