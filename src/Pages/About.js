import React from "react";
import '../CSS/about.css'

class About extends React.Component {
  render () {
    return (
      <div className="about">
        <img src='https://images.gr-assets.com/users/1607460347p6/32941685.jpg' alt='Bel Books' className="imgbooks"/>
        <p>Bel Books é um perfil literário no Instagram, criado em 2017, com resenhas críticas de livros de gêneros variados, indicações notícias do mundo da literatura e reflexões sobre o mercado literário.</p>
        <a href="https://www.instagram.com/bel.books/" target="_blank">
        <img src={require('../Data/instagram.jpg')} alt='Bel Books Instagram' className="imginsta"/>
        </a>
      </div>
    )
  }
}

export default About;