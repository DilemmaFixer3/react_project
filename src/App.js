import './App.css';
import {GenresList, MoviesList} from "./Components";
import {Header} from "./Components/Header/Header";

const App = () => {
  return (
      <div>
          <Header/>
          <GenresList/>
            <MoviesList/>
      </div>
  );
};

export {App};
