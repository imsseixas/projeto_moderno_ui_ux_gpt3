import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css';

const Menu = () => (
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#wgpt3">O que é GPT3?</a></p>
  <p><a href="#possibility">Open AI</a></p>
  <p><a href="#features">Case Studies</a></p>
  <p><a href="#blog">Biblioteca</a></p>
  </>

)


const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Entrar</p>
        <button type='button'>Cadastrar</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {ToggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {ToggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className='gpt3__navbar-menu_container-links'>
          <Menu/>
          <div className='gpt3__navbar-menu_container-links-sign'>
            <p>Entrar</p>
            <button type='button'>Cadastrar</button>
          </div>
        </div>
        </div>

          )}
      </div>
    </div>
  )
}

export default Navbar