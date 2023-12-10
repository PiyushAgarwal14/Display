import React, { useState, useEffect } from 'react';
import "./App.css";
import Greeting from './Greeting';


const App = () => {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  const getRandomQuote = () => {
    setLoading(true);
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setQuote(data);
      });
  };

  
  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
        <div className="main-content">
          <p id='demo' style={{fontSize:60, fontWeight:700, marginBottom:0}}><Greeting/></p>
          <p>Made with ❤️ By <a href="http://piyushagarwal.freecluster.eu" rel='noreferrer'> Piyush Agarwal </a></p>
          <div className="buttons">
            {/* <button className="btn">
              <a href="#">Read Article</a>
            </button> */}
            <button className="btn get-quote" onClick={getRandomQuote}>
              Generate Quote
            </button>
          </div>
          <div className="quote-section">
            <blockquote className="quote">{quote.content}</blockquote>-{' '}
            <span className="author">{quote.author}</span> <br/>
            <span className='category'><b>Category: </b> {quote.tags}</span>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default App;