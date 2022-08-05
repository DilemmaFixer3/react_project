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
    }, [dispatch]);
    console.log(genres);

    return (
        <div>

                GenresList
            {

                // genres.map((value)=> <GenreInfo genre={value}/>)
            }
         </div>
    );
};

export {GenresList};