import {Outlet, useNavigate} from "react-router-dom";

import {Header} from "../../Components";

import css from './Layout.module.css';

const Layout = () => {
    const navigate = useNavigate();

    return (
        <div>
        <div className={css.LightTheme}>
            <Header/>
            <div className={css.butt}>
                <button onClick={()=>{navigate(-1)}}>Previous</button>
                <button onClick={()=>{navigate(1)}}>Next</button>
            </div>
            <Outlet/>
        </div>
        </div>
    );
};

export {Layout};