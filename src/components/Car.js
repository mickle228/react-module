import { useDispatch } from "react-redux";
import {triggerActions, updateActions} from "../store";
import {carService} from "../services";

const Car = ({ car }) => {
    const { id, brand, price, year } = car;
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateActions.setCarForUpdate(car));
    };

    const deleteCar = async () => {
        await carService.deleteById(id)
        dispatch(triggerActions.changeTrigger());
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={handleUpdate}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export { Car };
