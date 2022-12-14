import React from "react"
import './Skills.css'
import { IoHardwareChip } from 'react-icons/io5'
import { HiComputerDesktop } from 'react-icons/hi2'
import { BiSupport, BiCodeAlt } from 'react-icons/bi'
import { FaServer } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className="Skills">
      <ul>
        <li><IoHardwareChip /> Hardware</li>
        <li><BiCodeAlt />Software</li>
        <li><BiSupport />Suporte ao cliente</li>
        <li><FaServer />Suporte a servidores</li>
        <li><HiComputerDesktop />Suporte a desktop</li>
        <li>Suporte HelpDesk</li>
        <li>Configuração de sistemas</li>
        <li>Informática</li>
        <li>RouterOS</li>
        <li>Mikrotik</li>
        <li>Pacote Office</li>
        <li>Rede</li>
        <li>Tecnologias de Rede sem fio</li>
        <li>Análise de Rede</li>
        <li>Inglês Básico</li>
        <li>Linux</li>
        <li>Ubuntu</li>
        <li>Windows</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>BootStrap</li>
        <li>SQL</li>
        <li>FirebirdSQL</li>
        <li>MySQL</li>
        <li>Rest</li>
        <li>Design</li>
        <li>Photoshop</li>
        <li>Marketing</li>
        <li>Social Media</li>
      </ul>
    </div>
  )
}

export default Skills