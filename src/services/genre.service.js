import {axiosService} from "./axios.service";
import {APIKey, urls} from "../constants";

const genreService={
    getAll: ()=>axiosService.get(`${urls.genres}?${APIKey}`)
    // getMovieById:(id)=>axiosService.get(`${urls.movie}/${id}?${APIKey}`)

}

export {genreService};