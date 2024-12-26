/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Footer from "../../Components/Fixed/Footer";
import Swal from "sweetalert2";


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
                  Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Log in Successful.",
                            showConfirmButton: false,
                            timer: 1300
                        });
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
        <div>
            <div className="bg-center bg-cover text-white min-h-screen pb-10"
                style={{ backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/1*tDmrS-qRpP_qtgk-bgTgMQ.jpeg')` }}
            >



                <div className="bg-black mb-5 py-5 flex items-center justify-between px-2 md:px-20 flex-row-reverse">
                    <Link to={"/"} className="w-fit ">
                        <p className="md:text-3xl text-xl pl-10 py-2 font-bold hover:text-yellow-500 text-white flex items-center gap-3 w-fit">
                            <img src="https://img.icons8.com/fluency/48/long-arrow-left.png" className="w-7" />
                            Go back home
                        </p>
                    </Link>


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



                <div className="w-fit mx-auto  flex items-center justify-center bg-black/50 backdrop-blur rounded-xl">

                    <div className="p-8 rounded-lg  max-w-md w-full">
                        <h2 className="md:text-3xl text-xl font-bold text-center text-white mb-6">Welcome Back</h2>

                        <form onSubmit={HandleLogin} className="md;space-y-6 space-y-3">

                            {/* Email Field */}
                            <div className="relative">
                                <label className="text-sm my-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full text-black px-4 py-2 border border-white-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
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

                                <label className=" text-sm"><Link className="text-indigo-500 font-semibold hover:underline">Forgot password?</Link>
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

                        <button onClick={HandleGoogleLogin} className="btn btn-sm rounded-full btn-warning w-full mt-1 mb-5 btn-outline">Log in With Google
                            <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg " />
                        </button>

                        {/* Footer Text */}
                        <p className="text-center text-white mt-6">
                            Don’t have an account? <Link to='/signUp' className="text-indigo-500 font-semibold hover:underline">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default LoginPage;