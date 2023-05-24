import logo from './logo.svg';
import './App.css';
import CategoryGrid from './CategoryGrid';
import VoteCells from './VoteCells';
import data from './data.json';
import { createContext, useEffect } from 'react';
export const DataContext = createContext([]);

function App() {

  return (
    <DataContext.Provider value={data.categories}>
      <div className="App">
        <div className="App-header">
          <h3 className='Text-header'>Online Votes</h3>
          {data && data.categories.map((category) => (<CategoryGrid key={category.id} id={category.id}>

          </CategoryGrid>))}
          <button className='Submit-button'>Submit Your Votes</button>
        </div>
      </div>
      </DataContext.Provider>
  );
}

export default App;
