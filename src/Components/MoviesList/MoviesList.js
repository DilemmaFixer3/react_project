// todo містить перелік(список) усіх фільмів
// мапати(map) масив фільмів і запихати кожен в компоненту MoviesListCard



import {useDispatch, useSelector} from "react-redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useEffect} from "react";
import {movieActions} from "../../redux";

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);
    const {results} = movies;

    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(movieActions.getAll());
    }, []);

    return (
        <div>
            {results&&results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};