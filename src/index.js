import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyBaout9Q8tjiYx8VBTZOKwo44Pu99iToRQ';

// Create a new component
// This component should produce some HTML
const App = () => {
  return (
    <div> 
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
