import React, { useState, useEffect } from "react";
import { carService } from "../services/carService";
import { CarForm } from "./CarForm";
import { Cars } from "./Cars";

const CarsContainer = () => {
    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({ data }) => setCars(data));
    }, [trigger]);

    const handleDelete = async (id) => {
            await carService.deleteById(id);
            setCars(cars.filter(car => car.id !== id));
    };

    return (
        <div>
            <CarForm setTrigger={setTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate} />
            <hr />
            <Cars cars={cars} onDelete={handleDelete} setCarForUpdate={setCarForUpdate} />
        </div>
    );
};

export { CarsContainer };
