import {useNavigate} from "react-router-dom";

const Episodes = ({chapter}) => {
    const {id, name, episode} = chapter;
    const navigate = useNavigate();
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>episode: {episode}</div>
            <button onClick={()=> navigate(`/characters/${id}`)}>characters</button>
        </div>
    );
};

export {Episodes};