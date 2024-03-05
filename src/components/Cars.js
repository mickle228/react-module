import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carService} from "../services";
import {Car} from "./Car";
import {carsActions} from "../store";

const Cars = () => {
    const dispatch = useDispatch();
    const {cars} = useSelector(state=>state.cars);
    const trigger = useSelector(state => state.trigger);

    useEffect(() => {
        carService.getAll().then(({data}) => dispatch(carsActions.setResponse(data)))
    }, [dispatch, trigger]);
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};