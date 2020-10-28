import React, { useEffect } from 'react';
import logo from './logo.svg';
import { fetchSynonyms } from './fetchData';
import './App.css';

function App() {
  useEffect(() => {
    const getSynonyms = async () => {
      const data = await fetchSynonyms('amazing');
      console.log(data);
    };

    getSynonyms();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
