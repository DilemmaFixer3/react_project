// todo містить в собі компоненту MovieInfo + PosterPreview.


import {MovieInfo} from "../MovieInfo/MovieInfo";

const MoviesListCard = ({movie}) => {

    // const {title, id, original_title, overview, popularity, release_date, vote_average, vote_count} = movie;

    return (
        <div>
            <hr/>
            <MovieInfo key={movie.id} movie={movie}/>
            <hr/>
        </div>
    );
};

export {MoviesListCard};