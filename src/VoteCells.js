import React, { useEffect, useState } from "react";

export default function VoteCells({ nominee, selectedVote, disableCategory, storedSelected, categoryID }) {

    const [currNominee, setCurrNomeinee] = useState(nominee);
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if(storedSelected) {
            if(currNominee.id == storedSelected.voteID && categoryID == storedSelected.categoryID)
                setSelected(true);
        }
    }, [storedSelected]);

    function selectOption() {
        if(disableCategory) {
            alert("You have already voted for this category!");
        }
        else {
            alert(currNominee.name + " selected!");
            setSelected(true);
            selectedVote(currNominee.id, currNominee.name);
        }
    }

    return (
        <div className="Voting-cells">
            <p className="Cell-title">{currNominee.name}</p>
            <img className="icon-image" src={currNominee.image} alt={currNominee.name + " image"}></img>
            <button type="button" className="Vote-button" disabled={selected} onClick={selectOption}>Vote</button>
        </div>
    )
}