import {Outlet} from "react-router-dom";

import {MoviesList} from "../../Components";

const MoviesPage = () => {
    return (
        <div>
            <Outlet/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};