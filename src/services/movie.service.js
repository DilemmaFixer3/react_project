import {axiosService} from "./axios.service";
import {APIKey, urls} from "../constants";

const movieService={
    getAll: ()=>axiosService.get(`${urls.movies}?${APIKey}`),
    getMovieById:(id)=>axiosService.get(`${urls.movie}/${id}?${APIKey}`)

}

export {movieService};