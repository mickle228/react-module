import React from 'react';

const Launch = ({launch}) => {
    if (launch.launch_year !== 2020) {
    }
    return (
        <div>
            <div>mission_name: {launch.mission_name}</div>
            <div>launch_year: {launch.launch_year}</div>
            <img src={launch.links.mission_patch_small} alt="mission_img"/>
        </div>
    );
};

export default Launch;