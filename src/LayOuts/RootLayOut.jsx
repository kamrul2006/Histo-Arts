import { Outlet } from "react-router-dom";
import NavbarPart from "../Components/Fixed/NavbarPart";
import Footer from "../Components/Fixed/Footer";

const RootLayOut = () => {
    return (
        <div  className="md:max-w-7xl mx-auto border-x-2" >
            
            <NavbarPart />

            <Outlet />

            <Footer />

        </div>
    );
};

export default RootLayOut;