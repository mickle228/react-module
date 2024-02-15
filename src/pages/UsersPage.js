import {Outlet} from "react-router-dom";

import {Users} from "../components/UsersContainer/Users";

const UsersPage = () => {
    // const {data} = useLoaderData();

    return (
        <div>
            <Users/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};