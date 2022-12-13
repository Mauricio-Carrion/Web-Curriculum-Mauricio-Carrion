import React from "react"
import './Inicio.css'
import perfilImg from '../assets/img/20200401_130928.jpg'
import { AtSymbolIcon } from '@heroicons/react/24/solid'

const Inicio = () => {
  return (
    <div className="Inicio">
      <img src={perfilImg} alt="perfil" className="inicioImg" />
      <h1>Maurício Carrion</h1>
      <div className="contato">
        <span>
          <AtSymbolIcon className="iconColor" />
          <a href="mailto:mauricio.sjn@gmail.com">MAURICIO.SJN@GMAIL.COM</a>
        </span>
      </div>
    </div>
  )
}

export default Inicio