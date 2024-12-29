import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.config";
import { AuthContext } from "../../Providers/AuthProvider";
import Footer from "../../Components/Fixed/Footer";



const SignupPage = () => {
    useEffect(() => {
            document.title = "K-HistoArts || Sign Up"
        }, [])
    

    const navigate = useNavigate()
    //--------------------------Context use--------------------------
    const { CreateUserByMailPass, setUser, updatedProfile, GoogleLogin } = useContext(AuthContext)

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    const [show, setShow] = useState(false)

    const HandleSignUp = (e) => {
        e.preventDefault();
        // -------------------clearing error +success msg
        setError(null)
        setSuccess(null)

        const Email = e.target.email.value
        const Password = e.target.password.value
        const Name = e.target.name.value
        const Photo = e.target.photoUrl.value
        const Terms = e.target.terms.checked
        // console.log('Name:-', Name)
        // console.log('Email:-', Email)
        // console.log('Password:-', Password)
        // console.log('Terms:-', (Terms))


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!Terms) {
            setError('Pleas accept all the terms and conditions.')
            return
        }
        else if (Password.length < 6) {
            setError('Password should must be 6 character or more !!')
            return
        }
        else if (!passwordRegex.test(Password)) {
            setError('Password should contain a-z, A-Z, 0-9 and a special character.')
            return
        }


        CreateUserByMailPass(Email, Password)
            .then((userCredential) => {
                //         // ----------------------------Signed up 
                const user = userCredential.user;
                // const time = userCredential.user.metadata.creationTime;
                setUser(user)
                setSuccess('Sign Up Successful.')

                // const newUser = { Email, Name, Photo, CreatedTIme: time }

                updatedProfile({ displayName: Name, photoURL: Photo })
                    .then(() => {

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "SignUp Successful.",
                            showConfirmButton: false,
                            timer: 1000
                        });

                        navigate('/')
                    }).catch(err => setError(err.massage))


                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        //                 console.log('Email verification sent!')
                    })
            });


    }

    //------------------- HAndle google--------------
    const HandleGoogleLogin = () => {
        GoogleLogin()
            .then((res) => {
                // console.log(res.user)
                setUser(res.user)
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                setUser(null)
            })
    }

    const ShowPassWord = (e) => {
        e.preventDefault();
        setShow(!show)
    }


    return (
        <div>
            <div className="bg-center bg-cover text-white bg-black"
                style={{ backgroundImage: `url('https://www.papersapp.com/wp-content/uploads/2024/05/bg-eq-glow.jpg')` }}
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



                <div className="flex items-center justify-center">


                    <div className=" p-8 max-w-md w-full my-5  bg-black/30 backdrop-blur-md rounded-md">
                        <h2 className="text-3xl font-bold text-white text-center mb-6">Sign up</h2>

                        <form onSubmit={HandleSignUp} className="md:space-y-4">

                            <div className="relative">
                                <label className="  text-sm mx-2">
                                    Full Name:
                                </label>
                                <input
                                    type="Text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none text-black focus:border-blue-500 peer"
                                    placeholder="First name + Last Name"
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="  text-sm mx-2">
                                    Photo Url:
                                </label>
                                <input
                                    type="text"
                                    id="photo"
                                    name="photoUrl"
                                    className="w-full text-black px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:border-blue-500 peer"
                                    placeholder="Photo URL"
                                    required
                                />
                            </div>

                            <div className="">
                                <label className="  text-sm mx-2">
                                    Email Address:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:border-blue-500 peer text-black"
                                    placeholder="Email "
                                    required
                                />
                            </div>

                            <div className="relative">
                                <label className="  text-sm mx-2">
                                    Password:
                                </label>
                                <input
                                    type={show ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    className="w-full px-4 py-2 border border-yellow-300 rounded-lg focus:outline-none focus:border-blue-500 peer text-black"
                                    placeholder="Password"
                                    required
                                />
                                <button onClick={ShowPassWord} className="btn btn-ghost btn-xs absolute right-3 top-8 text-lg">
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="my-2">
                                <label className="cursor-pointer flex items-center gap-2">
                                    <input type="checkbox" name="terms" className=" rounded-full border-red-500 border-2 w-5 h-5"  defaultChecked/>
                                    <span className=" text-white" >Accept all terms and conditions.</span>
                                </label>
                            </div>

                            {error && <p className="text-xs font-semibold text-red-500 text-center">{error}</p>}
                            {success && <p className="text-xs font-semibold text-green-500 text-center">{success}</p>}

                            <button type="submit" className="w-full btn btn-warning text-black py-1 rounded-lg font-semibold">
                                Sign Up
                            </button>
                        </form>

                        <div className="divider divider-info mt-2">or</div>

                        <button onClick={HandleGoogleLogin} className="btn btn-sm rounded-full btn-neutral w-full mt-1">Log in With Google
                            <img src="https://img.icons8.com/fluency/50/google-logo.png" alt="google-logo" className="w-5 shadow-lg" />
                        </button>

                        <p className="text-center text-white mt-2">
                            Already have an account?  <Link to={'/logIn'} className="text-blue-500 hover:underline">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    );
};

export default SignupPage;