import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import Home from "../Pages/Home/Home";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;


