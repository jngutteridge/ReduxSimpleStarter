import React from 'react';
import ReactDOM from 'react-dom';

// Create new component to produce HTML
const App = () => {
    return <div>Hello</div>;
};

// Inject component into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
