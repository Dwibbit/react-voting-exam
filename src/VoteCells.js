import React, { useState } from "react";

export default function VoteCells({ nominee }) {

    const [currNominee, setCurrNomeinee] = useState(nominee);
    const [selected, setSelected] = useState(false);

    function selectOption(val) {
        console.log(val.target.value);
        alert(currNominee.name + " selected!");
        setSelected(true);
    }

    return (
        <div className="Voting-cells">
            <p className="Cell-title">{currNominee.name}</p>
            <img className="icon-image" src={currNominee.image} alt={currNominee.name + " image"}></img>
            <button type="button" className="Vote-button" disabled={selected} onClick={selectOption}>Vote</button>
        </div>
    )
}