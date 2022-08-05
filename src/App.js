import './App.css';

import {Route, Routes, Navigate} from "react-router-dom";

import {GenresPageSearch, Layout, MoviesPage, NotFoundPage, SingleMoviePage} from "./Pages";


const App = () => {
  return (
      <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}>
                    <Route path={':id'} element={<SingleMoviePage/>}/>
                </Route>
                <Route path={'genres'} element={<GenresPageSearch/>}/>
            </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
      </div>
  );
};

export {App};
