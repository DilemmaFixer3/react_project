import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux";
import {GenreInfo} from "../GenreInfo/GenreInfo";

const GenresList = () => {

    const {genres} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAll());
    }, []);

    return (
        <div>
            {genres&&genres.map(genre=><GenreInfo key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};