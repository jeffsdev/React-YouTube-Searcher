import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyDVkXaPoLqzo9Pb8bbzPzzGYFOa30k5Y5U";


const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
