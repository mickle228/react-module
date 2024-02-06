import React, {useEffect, useState} from 'react';
import Launch from "../Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(value => setLaunches(value))
    }, []);
    return (
        <div>
            {launches.map((launch, index) => {
                if (launch.launch_year !== "2020") {
                    return <Launch key={index} launch={launch} />;
                } else {
                    return null;
                }
            })}
        </div>
    );
};

export default Launches;