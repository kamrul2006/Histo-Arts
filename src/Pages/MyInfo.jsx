import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyInfo = () => {

    useEffect(() => {
        document.title = "K-HistoArts || My Profile"
    }, [])

    const { user } = useContext(AuthContext);
    return (
        <div className=" min-h-screen flex justify-center items-center">
            <div className="bg-gradient-to-r from-indigo-800 to-pink-800 max-w-3xl w-full p-8 rounded-3xl shadow-2xl bg-opacity-90 backdrop-blur-md text-white">
                {user && (
                    <div className="space-y-6 ">
                        <div className="text-center">
                            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500">
                                Hello, <span className="text-white">{user.displayName}</span>!
                            </h1>
                            <p className="mt-2 text-lg font-medium text-gray-300">
                                Welcome to <span className="text-yellow-400">K-HistoArts</span>
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-28 h-28 rounded-full overflow-hidden shadow-xl border-4 border-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 transform transition-all hover:scale-110">
                                <img src={user.photoURL} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <p className="text-lg text-gray-200">Name:</p>
                                <p className="text-xl font-semibold text-yellow-300">{user.displayName}</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-lg text-gray-200">Email:</p>
                                <p className="text-xl font-semibold text-yellow-300">{user.email ? user.email : "Not Added"}</p>
                            </div>

                            <div className="flex justify-between items-center">
                                <p className="text-lg text-gray-200">Verified:</p>
                                <p className="text-xl font-semibold text-green-400">
                                    {user.emailVerified ? '✅ Verified' : '❌ Not Verified'}
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-6">
                            <Link to={"/edidprofile"} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-white font-semibold shadow-lg transform transition-all hover:scale-105">
                                Edit Profile
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyInfo;
