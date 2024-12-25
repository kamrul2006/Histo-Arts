/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LoginPage = () => {
    const location = useLocation()
    // console.info(location)

    const [error, setError] = useState(null)

    const [show, setShow] = useState(false)
    const ShowPassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }


    const navigate = useNavigate()

    //---------- Context use----------------------
    const { LoginUser, setUser, GoogleLogin } = useContext(AuthContext)

    
    const HandleLogin = (e) => {
        e.preventDefault();
        setError(null)
        const Email = e.target.email.value
        const Password = e.target.password.value

        //-------------------------login with email and password--------------------
        LoginUser(Email, Password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)

                navigate(location.state ? location.state : '/')
            })
            .catch((error) => {
                // console.log(error)
                // navigate(location.state ? location.state : '/')
                if (error) { setError('Password or Email is invalid..!') }
            });
    }

    //------------------- HAndle google--------------
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                // console.log(res.user)
                setUser(res.user)

                navigate(location.state ? location.state : '/')
            })
            .catch(err => {
                // console.log(err);
                setUser(null)
            })
    }


    return (
        <div className="bg-center bg-cover text-white bg-black"
        //  style={{ backgroundImage: `url(${bg})` }}
        >
            <Link to={"/"} className="w-fit">
                <p className="text-3xl pl-10 pt-10 font-bold text-white flex items-center gap-3 w-fit">
                    <img src="https://img.icons8.com/fluency/48/long-arrow-left.png" className="w-7" />
                    Go back home
                </p>
            </Link>
            <div className="min-h-screen flex items-center justify-center ">

                <div className="p-8 rounded-lg  max-w-md w-full">
                    <h2 className="text-3xl font-bold text-center text-white mb-6">Welcome Back</h2>

                    <form onSubmit={HandleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div className="relative">
                            <label className="text-sm my-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="Enter Your Email. "
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <label className="my-1 text-sm">
                                Password
                            </label>
                            <input
                                type={show ? "text" : "password"}
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 text-black border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                placeholder="Enter Password. "
                                required
                            />

                            {/* --------------------------Forgot password section---------------------- */}

                            <label className=" text-sm"><Link to='/login/forgetPassword' className="text-indigo-500 font-semibold hover:underline">Forgot password?</Link>
                            </label>

                            <button onClick={ShowPassWord} className="btn btn-ghost btn-xs absolute right-3 top-8 text-lg text-black">
                                {show ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-1 bg-purple-500 text-white font-semibold rounded-full hover:bg-indigo-600 transition duration-300"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="divider divider-info mt-8">or</div>

                    <button onClick={HandleGoogleLogin} className="btn btn-sm rounded-full btn-warning w-full mt-1 mb-5">Log in With Google
                        <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg border rounded-full" />
                    </button>

                    {/* Footer Text */}
                    <p className="text-center text-white mt-6">
                        Don’t have an account? <Link to='/signUp' className="text-indigo-500 font-semibold hover:underline">Sign Up</Link>
                    </p>
                </div>
            </div></div>
    );
};

export default LoginPage;