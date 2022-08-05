import {Link} from "react-router-dom";

import {MovieInfo} from "../MovieInfo/MovieInfo";
import {PosterPreview} from "../PosterPreview/PosterPreview";

import css from './MoviesListCard.module.css';

const MoviesListCard = ({movie}) => {

    const {id, poster_path, title} = movie;

    return (
        <div className={css.MoviesListCard}>
            <Link to={`${id}`} state={movie}>
                <div>
            <PosterPreview posterUrl={poster_path} title={title} />
            <MovieInfo key={id} movie={movie}/>
                </div>
            </Link>
        </div>
    );
};

export {MoviesListCard};