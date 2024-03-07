import {useNavigate} from "react-router-dom";

import css from './Episode.module.css';
import {useDispatch} from "react-redux";
import {episodesActions} from "../../../store";

const Episode = ({episode}) => {
    const {id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
        dispatch(episodesActions.setEpisodeName(name))
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        navigate(`/characters/${ids}`)
    };

    return (
        <div className={css.Episode} onClick={toCharacters}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
        </div>
    );
};

export {Episode};