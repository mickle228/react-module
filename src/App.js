import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/first-component/FirstComponent";

import React from 'react';

const App = () => {
    const family = [
        {
            name: "Homer",
            id: 1,
            photo: "https://bit.ly/2z2rfVm"
        },

        {
            name: "Marge",
            id: 2,
            photo: "https://bit.ly/2Krycoj"
        },

        {
            name: "Bart",
            id: 3,
            photo: "https://bit.ly/2lNZrun"
        },

        {
            name: "Lisa",
            id: 4,
            photo: "https://bit.ly/2tXaOEg"
        },

        {
            name: "Maggie",
            id: 5,
            photo: "https://bit.ly/2IL7Tnj"
        }
    ];
    return (
        <div>
            {family.map(person=> <FirstComponent person={person} key={person.id}/>)}
        </div>
    );
};

export default App;
