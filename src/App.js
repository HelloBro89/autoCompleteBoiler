import React from 'react';
import './assets/styles.css';
import { SearchField } from './Components/SearchField';

const App = () => {
    return (
        <div className="App">
            <h1>The auto-complete input field</h1>
            <SearchField />
        </div>
    );
};

export default App;
