import React from "react"
import './FormPro.css'
import scrollToTop from "../utils"

const FormPro = () => {
  scrollToTop()

  return (
    <div className="FormPro">
      <ul>
        <li>
          <h4>Operador de computador</h4>
          Senac Rio Grande
        </li>

        <hr />

        <li>
          <h4>Instalação e Manutenção de Computadores</h4>
          Instituto Universal Brasileiro
        </li>

        <hr />

        <li>
          <h4>Mikrotik</h4>
          EADCCNA
        </li>

        <hr />

        <li>
          <h4>AutoCad 2D e 3D</h4>
          Instituto Porto de Formação Profissional
        </li>

        <hr />

        <li>
          <h4>Discover Path Conectar</h4>
          RocketSeat
        </li>

        <hr />

        <li>
          <h4>JavaScript</h4>
          Hcode Treinamentos
        </li>

        <hr />

        <li>
          <h4>Desenvolvedor Web Moderno</h4>
          Cod3r - Leonardo Moura Leitão
        </li>

        <hr />

        <li>
          <h4>Curso Completo de Banco de dados e SQL</h4>
          UniDados - Felipe Mafra
        </li>

      </ul>
    </div>
  )
}

export default FormPro