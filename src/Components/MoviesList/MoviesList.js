import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux";

import css from './MoviesList.module.css';

const MoviesList = () => {

    const {movies} = useSelector(state => state.movies);
    const {results} = movies;

    const dispatch = useDispatch();

    useEffect(()=>{
            dispatch(movieActions.getAll());
    }, []);

    return (
        <div className={css.MoviesList}>
            {results&&results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};