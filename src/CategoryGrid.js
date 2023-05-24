import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { DataContext } from './App';
import VoteCells from './VoteCells';

export default function CategoryGrid({categoryID, categoryVoted, storedVotes}) {

    const data = useContext(DataContext);
    const [currKey, setCurrKey] = useState(categoryID);
    const [currCategory, setCurrCategory] = useState(data[currKey-1]);
    const [disableCategory, setDisableCategory] = useState(false);
    const [storedSelection, setStoredSelection] = useState(storedVotes);

    useEffect(() => {
        //check if user has already voted from previous sessions
        if(storedVotes) {
            setDisableCategory(true);
            setStoredSelection(storedVotes.find(obj => {
                return obj.categoryID === categoryID
              }));
        }
      }, []);

    function selectedCell(dataID, name) {
        //runs when a user votes for an option
        categoryVoted(categoryID, dataID, name);
        setDisableCategory(true);
    }

    return (
        <div className='Voting-grid'>
            {currKey && <h4 className='Grid-header'>Category: {data[currKey-1].categoryName}</h4>}
            <div className='Cell-grid'>
                {data && currCategory.nominees.map((nominee) => 
                    <VoteCells 
                        key={nominee.id}
                        nominee={nominee} 
                        selectedVote={selectedCell} 
                        disableCategory={disableCategory} 
                        storedSelected={storedSelection}
                        categoryID={categoryID}>
                    </VoteCells>)}
            </div>
        </div>
    )
}