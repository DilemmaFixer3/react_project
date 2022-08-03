// todo головна сторінка. З менюшкою для вибору наступної сторінка
import {Outlet} from "react-router-dom";
import {Header} from "../../Components";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {Layout};