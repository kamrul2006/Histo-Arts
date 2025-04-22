import { Outlet } from "react-router-dom";
import NavbarPart from "../Components/Fixed/NavbarPart";
import Footer from "../Components/Fixed/Footer";

const RootLayOut = () => {
    return (
        <div className="border-x-2 bg-gradient-to-r from-amber-50 to-yellow-100" >

            <NavbarPart />

            <div className=" md:max-w-7xl mx-auto">
                <Outlet />
            </div>

            <Footer />

        </div>
    );
};

export default RootLayOut;