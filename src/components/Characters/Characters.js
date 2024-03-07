import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";

import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../store";

const Characters = () => {
    const {charactersOfEpisode:characters} = useSelector(state => state.characters)
    const {ids} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(charactersActions.getAll({ids}))
    }, [dispatch, ids]);

    const back = () => {
        navigate(-1)
    }
    return (
        <div>
            <button onClick={back}>back</button>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};