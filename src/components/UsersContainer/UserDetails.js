import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {
    const navigate = useNavigate();
    const {id, name, username, email} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => navigate('titles', {state: {user}})}>posts of current user</button>
        </div>
    );
};

export {UserDetails};