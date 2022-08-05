import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {movieService} from "../../services";
import {MovieDetails} from "../../Components";

const SingleMoviePage = () => {

    const [movie, setMovie] = useState();
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(()=>{
        if (!state){
        movieService.getMovieById(id).then(({data})=>setMovie(data))
        }else {
            setMovie(state);
        }
    }, [id, state]);

    return (
        <div>
            {movie&&<MovieDetails movie={movie} key={id}/>}
        </div>
    );
};

export {SingleMoviePage};