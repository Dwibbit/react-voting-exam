import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { DataContext } from './App';
import VoteCells from './VoteCells';

export default function CategoryGrid({id}) {

    const data = useContext(DataContext);
    const [currKey, setCurrKey] = useState(id);
    const [currCategory, setCurrCategory] = useState(data[currKey-1]);

    useEffect(() => {
        // console.log(data);
        console.log(currCategory);
      }, [id]);

    return (
        <div className='Voting-grid'>
            {currKey && <h4 className='Grid-header'>Category: {data[currKey-1].categoryName}</h4>}
            <div className='Cell-grid'>
                {data && currCategory.nominees.map((nominee) => <VoteCells key={nominee.id} nominee={nominee}></VoteCells>)}
            </div>
        </div>
    )
}