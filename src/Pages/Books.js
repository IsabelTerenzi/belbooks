import React from "react";
import data from "../Data/data";
import "../CSS/books.css";
import { ImAmazon } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";

class Books extends React.Component {
  render() {
    return (
      <div className="books">
        {data.map((book) => (
          <div key={data.name} className="book-info">
            <div className="author-info">
              <div className="name-author">
                <h1>{book.name}</h1>
                <h2>{book.author}</h2>
              </div>
              <img src={book.cover} alt={book.name} />
              <div className="info">
                <h3>País: {book.country}</h3>
                <h3>Gênero: {book.genre}</h3>
                <h3>Editora: {book.publisher}</h3>
              </div>
              <div className="buttons">
                <a href={book.link} target='_blank'>
                  <button type="button" className="amazon">
                    Comprar <ImAmazon className="icon-amazon" />
                  </button>
                </a>
                <a href={book.insta} target='_blank'>
                  <button type="button" className="insta">
                    Post <AiFillInstagram className="icon-post" />
                  </button>
                </a>
              </div>
            </div>
            <div className="resenha">
              <p>{book.review1}</p>
              <p>{book.review2}</p>
              <p>{book.review3}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Books;
