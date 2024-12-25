import { Link, NavLink } from "react-router-dom";


const list = <>
    <li><NavLink to={'/'}>Home</NavLink> </li>
    <li><NavLink to={'/All-Crafts'}>All Artifacts</NavLink> </li>
    <li><NavLink to={'/Add-Craft'}>Add Artifacts</NavLink> </li>
</>

const NavbarPart = () => {
    return (
        <div className="px-5 md:px-20 py-1 md:py-2 bg-orange-100">
            <div className="navbar">
                <div className="navbar-start">
                    {/* ----------------------------NAVBAr for large device started---------------------------- */}

                    {/* ---name and logo----- */}
                    <div className="flex items-center gap-3">
                        <img src="https://img.icons8.com/pieces/64/palace.png" alt="🏰" className="w-7 md:w-11" />

                        <Link to={'/'}>
                            <button
                                className="text-lg md:text-3xl font-bold font-serif hover:text-yellow-500">
                                K-HistoCraft
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                            {list}
                        </ul>
                    </div>

                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {list}
                        </ul>
                    </div>
                </div>


                <div className="navbar-end">
                    <Link to={'/logIn'}><button className="btn btn-sm btn-error btn-outline">Login</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarPart;