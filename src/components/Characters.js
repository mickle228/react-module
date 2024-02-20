import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Character} from "./Character";

const Characters = ({characterUrls}) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

            const charactersData = [];
            for (const url of characterUrls) {
                const response = await axios.get(url);
                charactersData.push(response.data);
            }
            setCharacters(charactersData);

        };
        fetchData();
    }, [characterUrls]);

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;
