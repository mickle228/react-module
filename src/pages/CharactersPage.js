import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {episodeService} from "../services";
import Characters from "../components/Characters";

const CharactersPage = () => {
    const {id: episodeId} = useParams();
    const [characterUrls, setCharacterUrls] = useState([]);
    useEffect(() => {
        episodeService.byId(episodeId).then(({data})=>setCharacterUrls(data.characters))
    }, [episodeId]);
    return (
        <div>
            {characterUrls && <Characters characterUrls={characterUrls}/>}
        </div>
    );
};

export {CharactersPage};