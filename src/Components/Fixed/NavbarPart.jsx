import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const list = < >
    <NavLink className="hover:text-gray-500" to={'/'}>Home</NavLink>
    <NavLink className="hover:text-gray-500" to={'/All-Crafts'}>All Artifacts</NavLink>
    <NavLink className="hover:text-gray-500" to={'/Add-Craft'}>Add Artifacts</NavLink>
    <NavLink className="hover:text-gray-500" to={'/abutUs'}>About Us</NavLink>
    <NavLink className="hover:text-gray-500" to={'/contactUs'}>Contact Us</NavLink>
</>

const NavbarPart = () => {
    const { user, UserSignOut } = useContext(AuthContext)
    // console.log(user?.photoURL)

    return (
        <div className="px-5 md:px-20 bg-yellow-100 bg-opacity-70 backdrop-blur sticky top-0 z-50 shadow text-black">
            <div className="navbar">
                <div className="navbar-start">
                    {/* ----------------------------NAVBAr for large device started---------------------------- */}

                    <div className="mr-6  lg:hidden flex items-center">

                        {/* ---------------------menu for mobile device-------------- */}
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm btn-circle lg:hidden">
                                <img src="https://img.icons8.com/external-others-inmotus-design/67/external-Menu-round-icons-others-inmotus-design-2.png" alt="..." className="w-7 h-7" />
                            </div>

                            <ul
                                tabIndex={0}
                                className="dropdown-content flex flex-col gap-5  bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                                {list}
                            </ul>
                        </div>

                    </div>



                    {/* ---name and logo----- */}
                    <div className="flex items-center gap-3">
                        <img src="https://img.icons8.com/pieces/64/palace.png" alt="🏰" className="w-7 md:w-11" />

                        <Link to={'/'}>
                            <button
                                className=" md:text-3xl font-bold font-serif hover:text-yellow-500">
                                K-HistoArts
                            </button>
                        </Link>
                    </div>

                </div>


                <div className=" hidden lg:flex navbar-center bg-amber-300 px-4 py-1 rounded-full text-black">
                    <ul className="px-1 space-x-4 font-semibold">
                        {list}
                    </ul>
                </div>



                <div className="navbar-end">
                    <label className="swap swap-rotate mx-3">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller hidden" value="dark" />

                        {/* sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>

                    <div>
                        {user ?
                            <div className="dropdown dropdown-left dropdown-hover">
                                <div tabIndex={0} role="button" className="w-10 h-10 md:w-14 md:h-14">
                                    {user.photoURL && <img src={`${user.photoURL}`} className="w-full h-full object-cover border-2 border-yellow-400 rounded-full" />}
                                </div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

                                    <p className=" text-black font-semibold hover:bg-white m-2">{user && user.displayName}</p>


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