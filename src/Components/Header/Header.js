import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.Header}>
              <NavLink to={'movies'}>Movies List</NavLink>
              <NavLink to={'genres'}>Genres List</NavLink>
        </div>
    );
};

export {Header};