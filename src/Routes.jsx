import React from "react"
import { Routes, Route } from "react-router-dom"
import Inicio from "./components/Inicio"
import Biografia from "./components/Biografia"
import Experiencias from "./components/Experiencias"
import FormPro from "./components/FormPro"
import Skills from "./components/Skills"

export default () => {
  return (
    <Routes>
      <Route exact path='/' element={<Inicio />} />
      <Route exact path='/biografia' element={<Biografia />} />
      <Route exact path='/experiencias' element={<Experiencias />} />
      <Route exact path='/formacao' element={<FormPro />} />
      <Route exact path='/skills' element={<Skills />} />
    </Routes >
  )
}
