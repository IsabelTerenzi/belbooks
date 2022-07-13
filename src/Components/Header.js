import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/header.css'
import { FaBookReader } from 'react-icons/fa';

class Header extends React.Component {
  render () {
    return (
      <div>
        <header>
          <nav className='header'>
          <FaBookReader className='iconbooks'/>
          <Link to='/' style={ { textDecoration: 'none' } } className='belbooks'>Bel Books</Link>
          <Link to='/search' style={ { textDecoration: 'none' } } className='link'>Pesquisar</Link>
          <Link to='/books' style={ { textDecoration: 'none' } } className='link'>Livros</Link>
          <Link to='/about' style={ { textDecoration: 'none' } } className='link'>Sobre</Link>
          </nav>
        </header>
        <footer>@ Isabel Terenzi, 2022</footer>
      </div>
    )
  }
}

export default Header;