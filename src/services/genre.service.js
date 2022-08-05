import {axiosService} from "./axios.service";
import {APIKey, urls} from "../constants";

const genreService={
    getAll: ()=>axiosService.get(`${urls.genres}?${APIKey}`)
}

export {genreService};