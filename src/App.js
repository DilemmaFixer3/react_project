import './App.css';
import {Route, Routes} from "react-router-dom";
import {GenresPageSearch, Layout, MoviePage, NotFoundPage} from "./Pages";


const App = () => {
  return (
      <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'movies'} element={<MoviePage/>}/>
                <Route path={'genres'} element={<GenresPageSearch/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </div>
  );
};

export {App};
