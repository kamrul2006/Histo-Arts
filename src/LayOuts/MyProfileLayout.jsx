import NavbarPart from "../Components/Fixed/NavbarPart";
import Footer from "../Components/Fixed/Footer";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import "../Components/Fixed/Active.css"

const MyProfile = () => {
    const { UserSignOut } = useContext(AuthContext)

    return (
        <div className="">
            <NavbarPart />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-5 max-w-7xl mx-auto">

                <div className="bg-gray-50 w-fit max-h-screen md:sticky top-10 md:col-span-1  md:pt-10">

                    <ul className="md:space-y-5  space-x-1 md:space-x-0 flex items-center justify-center md:gap-5 md:flex-col z-50">

                        <li className=" md:w-[200px] btn btn-neutral md:h-full  text-white">
                            <Link to={'/MyProfile'}>
                                <p className="p-1 text-xs md:p-4">My information</p>
                            </Link>
                        </li>

                        <li className="h-full">
                            <NavLink to={'/MyProfile/myAdded'} className={`btn`}>
                                <p className="md:p-4 p-1 text-xs md:w-[200px]">My added crafts</p>
                            </NavLink>
                        </li>

                        <li className="h-full">
                            <NavLink to={'/MyProfile/myLiked'} className={`btn`}>
                                <p className="md:p-4 p-1 text-xs md:w-[200px]">My Liked Crafts</p>
                            </NavLink>
                        </li>

                        <button onClick={UserSignOut} className="btn btn-outline btn-sm btn-warning">
                            Sign Out
                        </button>
                    </ul>

                </div>


                <div className="mx-auto flex items-center justify-center md:col-span-4">
                    <Outlet></Outlet>
                </div>
            </div>


            <Footer />
        </div >
    );
};

export default MyProfile;