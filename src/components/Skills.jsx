import React from "react"
import './Skills.css'
import { IoHardwareChip } from 'react-icons/io5'
import { HiComputerDesktop } from 'react-icons/hi2'
import { BiSupport, BiCodeAlt } from 'react-icons/bi'
import {
  FaServer,
  FaNetworkWired,
  FaLinux,
  FaUbuntu,
  FaWindows,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs
} from 'react-icons/fa'

import { BsFillGearFill } from 'react-icons/bs'

import {
  GiCircuitry,
  GiMegaphone
} from 'react-icons/gi'

import {
  MdRouter,
  MdNetworkCheck,
  MdDesignServices
} from 'react-icons/md'

import {
  SiMicrosoftoffice,
  SiUbiquiti,
  SiJavascript,
  SiBootstrap,
  SiMysql,
  SiAdobephotoshop
} from 'react-icons/si'

import { RiEnglishInput } from 'react-icons/ri'

import {
  AiOutlineConsoleSql,
  AiOutlineShareAlt
} from 'react-icons/ai'

import { ImFire } from 'react-icons/im'
import { TbApi } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'

import scrollToTop from "../utils"

const Skills = () => {
  scrollToTop()

  return (
    <div className="Skills">
      <ul>
        <li><IoHardwareChip /> Hardware</li>
        <li><BiCodeAlt />Software</li>
        <li><FaServer />Suporte a servidores</li>
        <li><HiComputerDesktop />Suporte a desktop</li>
        <li><BiSupport />Suporte HelpDesk</li>
        <li><BsFillGearFill />Configuração de sistemas</li>
        <li><GiCircuitry />Informática</li>
        <li><MdRouter />Mikrotik</li>
        <li><SiMicrosoftoffice />Pacote Office</li>
        <li><FaNetworkWired />Rede</li>
        <li><SiUbiquiti />Tecnologias de Rede sem fio</li>
        <li><MdNetworkCheck />Análise de Rede</li>
        <li><RiEnglishInput />Inglês Básico</li>
        <li><FaLinux />Linux</li>
        <li><FaUbuntu />Ubuntu</li>
        <li><FaWindows />Windows</li>
        <li><FaHtml5 />HTML</li>
        <li><FaCss3Alt />CSS</li>
        <li><SiJavascript />JavaScript</li>
        <li><FaReact />React.js</li>
        <li><FaNodeJs />Node.js</li>
        <li><SiBootstrap />BootStrap</li>
        <li><AiOutlineConsoleSql />SQL</li>
        <li><ImFire />FirebirdSQL</li>
        <li><SiMysql />MySQL</li>
        <li><TbApi />Rest</li>
        <li><MdDesignServices />Design</li>
        <li><SiAdobephotoshop />Photoshop</li>
        <li><FiFigma />Figma</li>
        <li><GiMegaphone />Marketing</li>
        <li><AiOutlineShareAlt />Social Media</li>
      </ul>
    </div>
  )
}

export default Skills