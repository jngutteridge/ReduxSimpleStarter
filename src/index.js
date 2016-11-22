import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCsJeth3PniRBkW1Xx6TUVTnMhod40ggIs';

YTSearch(
    {
        key: API_KEY,
        term: 'surfboards'
    },
    function(data) {
        console.log(data);
    }
);

// Create new component to produce HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Inject component into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
