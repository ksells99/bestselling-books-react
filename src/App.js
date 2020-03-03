import React, {useState, useEffect} from 'react';
import Book from './Book';
import './App.css';

const App = () => {

  const APP_KEY = 'rgjCiZPkJWoOFjOYx4eCmn1t5N4WYXg7';

  const [books, setBooks] = useState([]);                                     // everything in the state gets stored in 'books' element whenever setBooks is called
  const [search, setSearch] = useState("combined-print-and-e-book-fiction");

  useEffect(() => {
    getBooks();
  }, [search]);                                           //only runs when search is changed


  const getBooks = async () => {
    const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${search}.json?api-key=${APP_KEY}`);
    const data = await response.json();             // converts output from API to json - await means it'll wait until received info from external API
    const bookArray = Object.values(data.results.books);
    setBooks(bookArray);                          // will put books in the above state
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  // Add elements to page

  return(
    <div className="App">
      <h1>Bestselling Books</h1>
      <p>Using React.js, this application fetches the bestselling books from the New York Times API, dependent on the drop-down selection.</p>
      <form className="search-form">

        <select className="search-bar" value={search} onChange={updateSearch}>        
          <option value="combined-print-and-e-book-fiction">Combined Print and E-Book Fiction</option>
          <option value="combined-print-and-e-book-nonfiction">Combined Print and E-Book Nonfiction</option>
          <option value="paperback-books">Children's Paperback Books</option>
          <option value="education">Education</option>
          <option value="hardcover-fiction">Hardcover Fiction</option>
          <option value="hardcover-nonfiction">Hardcover Nonfiction</option> 
          <option value="celebrities">Celebrities</option>       
        </select>

      </form>  
      
      <div className="books">
      {books.map(book =>(                
        <Book title={book.title}
        author={book.author}
        image={book.book_image}
        description={book.description}
        key={book.book_uri}
        />
      ))}
      </div>

      <p>Icon by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
    </div>
  );
};

export default App;
