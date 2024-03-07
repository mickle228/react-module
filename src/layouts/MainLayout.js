import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {useSelector} from "react-redux";

const MainLayout = () => {
    const {error} = useSelector(state => state.episodes);
    return (
        <div>
            <Header/>
            {error && <h1>{error}</h1>}
            <Outlet/>
        </div>
    );
};

export {MainLayout};