// todo сторінка з фільмами ( запихнути MoviesList )


import {MoviesList} from "../../Components";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div>
            MoviePage
            <Outlet/>
            <MoviesList/>

        </div>
    );
};

export {MoviesPage};