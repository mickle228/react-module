import React from "react";
import { Car } from "./Car";

const Cars = ({ cars, onDelete, setCarForUpdate }) => {
    return (
        <div>
            {cars.map(car => (<Car key={car.id} car={car} onDelete={onDelete} setCarForUpdate={setCarForUpdate}/>))}
        </div>
    );
};

export { Cars };

