import React from "react";

const Car = ({ car, onDelete, setCarForUpdate }) => {
    const {id, brand, price, year} = car;
    const handleDelete = () => {
        onDelete(car.id);
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export { Car };
