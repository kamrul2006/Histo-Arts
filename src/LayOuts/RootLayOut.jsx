import { Outlet } from "react-router-dom";
import NavbarPart from "../Components/Fixed/NavbarPart";

const RootLayOut = () => {
    return (
        <div>
            <NavbarPart />

            <Outlet/>

            {/* ----------footer---------- */}

        </div>
    );
};

export default RootLayOut;