import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux";
import {GenreInfo} from "../GenreInfo/GenreInfo";

const GenresList = () => {

    const {genres} = useSelector(state => state.genres);
    console.log(genres);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(genreActions.getAll());
    }, []);
    console.log(genres);

    return (
        <div>
            {/*{*/}
            {/*    genres&&genres.map(genre=>{<GenreInfo genre={genre} key={genre.id}/>})*/}
            {/*}*/}
         </div>
    );
};

export {GenresList};