import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const list = <>
    <NavLink to={'/'}>Home</NavLink> 
    <NavLink to={'/All-Crafts'}>All Artifacts</NavLink> 
    <NavLink to={'/Add-Craft'}>Add Artifacts</NavLink> 
    <NavLink to={'/abutUs'}>About Us</NavLink> 
    <NavLink to={'/contactUs'}>Contact Us</NavLink>
</>

const NavbarPart = () => {
    const { user, UserSignOut } = useContext(AuthContext)
    // console.log(user?.photoURL)

    return (
        <div className="px-5 md:px-20 bg-yellow-100 bg-opacity-50 backdrop-blur sticky top-0 z-50 shadow">
            <div className="navbar">
                <div className="navbar-start">
                    {/* ----------------------------NAVBAr for large device started---------------------------- */}

                    {/* ---name and logo----- */}
                    <div className="flex items-center gap-3">
                        <img src="https://img.icons8.com/pieces/64/palace.png" alt="🏰" className="w-7 md:w-11" />

                        <Link to={'/'}>
                            <button
                                className="text-lg md:text-3xl font-bold font-serif hover:text-yellow-500">
                                K-HistoArts
                            </button>
                        </Link>
                    </div>



                </div>

                <div className="navbar-center">

                    {/* ---------------------menu for mobile device-------------- */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle lg:hidden">
                            <img src="https://img.icons8.com/external-others-inmotus-design/67/external-Menu-round-icons-others-inmotus-design-2.png" alt="..." className="w-7 h-7" />
                        </div>

                        <ul
                            tabIndex={0}
                            className="dropdown-content flex flex-col gap-5 p-4 bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>


                    <div className=" hidden lg:flex ">
                        <ul className="px-1 space-x-4">
                            {list}
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    <div>
                        {user ?
                            <div className="dropdown dropdown-left dropdown-hover">
                                <div tabIndex={0} role="button" className="w-10 h-10 md:w-14 md:h-14">
                                    {user.photoURL && <img src={`${user.photoURL}`} className="w-full h-full object-cover border-2 border-yellow-400 rounded-full" />}
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                    <li>
                                        <p className=" text-black font-semibold">{user && user.displayName}</p>
                                    </li>

                                    <Link to={'/MyProfile'}>  <button className="my-1 btn btn-xs text-xs  btn-success btn-outline w-full">My Profile </button></Link>

                                    <button className="btn btn-xs text-xs md:text-sm btn-warning" onClick={UserSignOut}>Sign Out </button>

                                </ul>
                            </div> :
                            <>
                                <Link to={"/login"}><button className="btn btn-outline btn-xs md:btn-sm btn-error">Log In </button></Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarPart;