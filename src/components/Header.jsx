import React from 'react'
import Nav from './Nav'
import '../styles/header.css';


const Header = () => {
  return (
    <div>
      <header className="header">
      <div className="header-content">
        <h1 className='title'>Trabajo Práctico N2</h1>
        <h3 className='subheader'>Com 4 - Grupo 4</h3>
      </div>
    </header>
    <Nav/>
    </div>
  )
}

export default Header