import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usePageQuery} from "../../../hooks";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';
import {episodesActions} from "../../../store";

const Episodes = () => {
    const {page, nextPage, prevPage} = usePageQuery();
    const dispatch = useDispatch();
    const {episodes, prevPage: prev, nextPage: next} = useSelector(state => state.episodes)

    useEffect(() => {
        dispatch(episodesActions.setEpisodeName(null))
        dispatch(episodesActions.getAll({page}))
    }, [dispatch, page]);

    return (
        <div>
            <div className={css.list_of_episodes}>
                {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
            </div>
            <div className={css.buttons}>
                <button disabled={!prev} onClick={prevPage}>prev</button>
                <button disabled={!next} onClick={nextPage}>next</button>
            </div>
        </div>
    );
};

export {Episodes};