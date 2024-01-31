import React from 'react';

const Characters = ({person}) => {
    const {id,name,status,species,gender,image} = person;
    return (
        <div>
            <h1>{id} {name}</h1>
            <p>status - {status}</p>
            <p>{species} - {gender}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Characters;