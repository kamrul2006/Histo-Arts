import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarPart = () => {
    const { user, UserSignOut } = useContext(AuthContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/All-Crafts", label: "All Artifacts" },
        { to: "/Add-Craft", label: "Add Artifacts" },
        { to: "/abutUs", label: "About Us" },
        { to: "/contactUs", label: "Contact Us" },
    ];

    const renderNavLinks = () =>
        navLinks.map((link, i) => (
            <NavLink
                key={i}
                to={link.to}
                className={({ isActive }) =>
                    `relative px-2 py-1 font-semibold transition-all duration-300 ease-in-out
          ${isActive
                        ? "text-yellow-600 scale-105 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-yellow-400 after:via-yellow-500 after:to-yellow-600"
                        : "text-gray-800 hover:text-yellow-600"
                    }`
                }
            >
                {link.label}
            </NavLink>
        ));

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-white/50 shadow-md border-b border-yellow-300">

            <div className=" mx-auto px-5 md:px-10">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="https://img.icons8.com/pieces/64/palace.png" className="w-8 md:w-10" />
                        <h1 className="text-2xl md:text-3xl font-bold font-serif text-yellow-600 hover:text-yellow-500 transition-all">
                            K-HistoArts
                        </h1>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-10 rounded-full shadow-xl px-5 py-2">
                        {renderNavLinks()}
                    </div>

                    {/* Profile + Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        {/* Profile/Login */}
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="w-12 hover:w-14  h-12 rounded-full border hover:border-4 border-yellow-400 overflow-hidden">
                                    <img src={user.photoURL} className="object-cover w-full h-full" />
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[999] bg-white shadow-xl rounded-lg w-48 p-4 space-y-2">
                                    <p className="text-sm font-bold text-gray-700">{user.displayName}</p>
                                    <Link to="/MyProfile">
                                        <button className="btn btn-xs btn-outline btn-info w-full">Dashboard</button>
                                    </Link>
                                    <button className="btn btn-xs btn-warning w-full" onClick={UserSignOut}>
                                        Sign Out
                                    </button>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="btn btn-sm btn-outline btn-error">Log In</button>
                            </Link>
                        )}

                        {/* Mobile Toggle Button */}
                        <div className="lg:hidden">
                            <button onClick={toggleMobileMenu} className="text-2xl text-yellow-600">
                                {isMenuOpen ? <FiX /> : <FiMenu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white/60 backdrop-blur-md rounded-lg shadow-md p-5 flex flex-col gap-4">
                        {renderNavLinks()}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavbarPart;
