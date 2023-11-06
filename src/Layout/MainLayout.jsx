import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const MainLayout = () => {
    return (
        <div className="max-w-[1440px] mx-auto bg-green-50">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;