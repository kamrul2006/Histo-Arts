/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import loader from "../../assets/loder.gif"
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()
    // console.info(location)

    if (loading) {
        return <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                {loader}
            </div>
        </div>
    }

    if (user) {
        return children
    }

    return (
        <Navigate state={location.pathname} to={'/login'}></Navigate>
    );
};


export default PrivetRout;