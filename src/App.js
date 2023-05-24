import logo from './logo.svg';
import './App.css';
import CategoryGrid from './CategoryGrid';
import VoteCells from './VoteCells';
import data from './data.json';
import { createContext, useEffect, useState, useRef } from 'react';
export const DataContext = createContext([null]);

function App() {

  const totalVotes = useRef(0);
  const submitted = useRef(false);
  const [totalCategories, setTotalCategories] = useState(data.categories.length);
  const [votes, setVotes] = useState([]);
  const existingVotes = useRef(JSON.parse(localStorage.getItem('votes')));

  useEffect(() => {
    // console.log(existingVotes.current);
  }, [])

  function categoryVoted(categoryID, voteID, voteName) {
    totalVotes.current = totalVotes.current+1;
    setVotes([...votes, {categoryID, voteID, voteName}]);
  }

  function createVotedString(voteArray) {
    let votesString = "";
    for (const [index, vote] of voteArray.entries()) {
      if(index == 0)
        votesString = votesString.concat(vote.voteName);
      else
        votesString = votesString.concat(", " + vote.voteName);
    }
    votesString = votesString.concat('.');
    
    return votesString;
  }

  function submitVotes() {
    if(existingVotes.current) {
      alert("You already voted for: " + createVotedString(existingVotes.current));
    }
    else if(submitted.current) {
      alert("You already voted for: " + createVotedString(votes));
    }
    else if(totalVotes.current == totalCategories) {
      alert("Thank you for your votes!");
      submitted.current = true;
      setVotes(votes.sort((a, b) => a.categoryID - b.categoryID));
      localStorage.setItem('votes', JSON.stringify(votes));
    }
    else {
      alert("You have to pick one nominee for each category");
    }
  }

  return (
    <DataContext.Provider value={data.categories}>
      <div className="App">
        <div className="App-header">
          <h3 className='Text-header'>Online Votes</h3>
          {data && data.categories.map((category) => (
          <CategoryGrid 
            key={category.id} 
            categoryID={category.id} 
            categoryVoted={categoryVoted}
            storedVotes={existingVotes.current}
            >
          </CategoryGrid>))}
          <button className='Submit-button' onClick={submitVotes}>Submit Your Votes</button>
        </div>
      </div>
      </DataContext.Provider>
  );
}

export default App;
