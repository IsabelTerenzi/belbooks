import React from "react";
import "../CSS/search.css";
import data from "../Data/data";
import { ImAmazon } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

class Search extends React.Component {
  state = {
    bookName: "",
  };
    

  handleChangeName = (event) => {
   this.setState({ bookName: event.target.value.toLowerCase() });
  };

  render() {
    const { bookName } = this.state;

    return (
      <div className="search">
        <div className="inputsearch">
          <label htmlFor="search">
            Pesquisar por nome do livro, autor ou editora:
            <input
              id="search"
              placeholder="Digite aqui"
              onChange={this.handleChangeName}
            />
          </label>
        </div>
        <div className="search-general">
          {data
            .filter(
              (book) =>
                book.name.toLowerCase() === bookName ||
                book.author.toLowerCase() === bookName ||
                book.publisher.toLowerCase() === bookName
            )
            .map((book) => (
              <div className="book-search" key={book.name}>
                <div className="infoautor">
                  <div className="nomeeautor">
                    <h1>{book.name}</h1>
                    <h2>{book.author}</h2>
                  </div>
                  <img src={book.cover} alt={book.name} />
                  <div className="details">
                    <h3>País: {book.country}</h3>
                    <h3>Gênero: {book.genre}</h3>
                    <h3>Editora: {book.publisher}</h3>
                  </div>
                  <div className="buttons-search">
                    <a href={book.link} target="_blank">
                      <button type="button" className="amazon">
                        Comprar <ImAmazon size={20} />
                      </button>
                    </a>
                    <a href={book.insta} target="_blank">
                      <button type="button" className="insta">
                        Post <AiFillInstagram size={20} />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="review">
                  <p>{book.review1}</p>
                  <p>{book.review2}</p>
                  <p>{book.review3}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
