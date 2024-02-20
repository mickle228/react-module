import {Outlet, useLocation, useParams} from "react-router-dom";

import {UserDetails} from "../components/UsersContainer/UserDetails";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";

const UserDetailsPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state?.user) {
            setUserDetails(state.user)
        } else {
            userService.getById(id).then(({data}) => setUserDetails(data))
        }
    }, [id, state]);
    return (
        <div>
            {userDetails&&<UserDetails user={userDetails}/>}
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};