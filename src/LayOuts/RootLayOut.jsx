import { Outlet } from "react-router-dom";
import NavbarPart from "../Components/Fixed/NavbarPart";
import Footer from "../Components/Fixed/Footer";

const RootLayOut = () => {
    return (
        <div>
            
            <NavbarPart />

            <Outlet />

            <Footer />

        </div>
    );
};

export default RootLayOut;