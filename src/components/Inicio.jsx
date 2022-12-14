import React from "react"
import './Inicio.css'
import perfilImg from '../assets/img/20200401_130928.jpg'
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'

const Inicio = () => {
  return (
    <div className="Inicio">
      <img src={perfilImg} alt="perfil" className="inicioImg" />
      <h1>Maurício Carrion</h1>
      <div className="contato">
        <span>
          <AiOutlineMail className="iconColor" />
          <a href="mailto:mauricio.sjn@gmail.com">MAURICIO.SJN@GMAIL.COM</a>
        </span>

        <span>
          <AiOutlinePhone className="iconColor" />
          <a href="tel:+5553992088789">(53) 9 9208-8789</a>
        </span>

        <span>
          <AiFillLinkedin className="iconColor" />
          <a href="https://www.linkedin.com/in/mauriciocarrionsjn/" target="_blank" rel="noopener noreferrer">mauriciocarrionsjn</a>
        </span>

        <span>
          <AiOutlineWhatsApp className="iconColor" />
          <a href="https://wa.me/5553992088789" target="_blank" rel="noopener noreferrer">(53) 9 9208-8789</a>
        </span>
      </div>
    </div>
  )
}

export default Inicio