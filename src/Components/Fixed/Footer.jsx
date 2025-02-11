import { Link } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    // const { user, } = useContext(AuthContext)
    return (
        <div className="mt-5 md:mt-10">
            <footer className="  bg-[#ffffe4] text-black rounded px-5 md:px-0">
                <div className="md:grid grid-cols-1 md:grid-cols-3  gap-10">

                    <div className="w-full  md:bg-amber-400 flex items-center justify-center flex-col md:rounded-e-full md:shadow-lg my-10 md:my-0">

                        <div className="">
                            <div className="flex md:hidden gap-4 items-center justify-center text-center font-semibold font-sans text-lg  pt-5 md:pt-0 bg-[#ffffe4]">
                                <Link className="hover:underline hover:text-blue-500" to={'/'}><p>Home</p></Link>
                                <Link className="hover:underline hover:text-blue-500" to={'/All-Crafts'}><p>All Artifacts</p></Link>
                                <Link className="hover:underline hover:text-blue-500" to={'/Add-Craft'}> <p>Add Artifacts</p></Link>
                            </div>

                            <div className="flex items-center justify-center md:justify-start gap-5 text-xl md:text-3xl mt-7">
                                <a className="hover:text-blue-500" href="https://www.facebook.com/">
                                    <FaFacebook />
                                </a>
                                <a className="hover:text-blue-500" href="https://www.instagram.com/">
                                    <FaInstagram />
                                </a>
                                <a className="hover:text-blue-500" href="https://www.youtube.com/">
                                    <FaYoutube />
                                </a>
                                <a className="hover:text-blue-500" href="https://x.com/home?lang=en">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 space-y-2 text-black md:pb-16 ">
                            <h3 className="text-2xl font-semibold mt-2">Get in touch:</h3>
                            <p className="flex items-center space-x-2">
                                <FiPhone />
                                <span>+88 01533 333 333</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FiMail />
                                <span>info1111@gmail.com</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <FiMail />
                                <span>info2222@hotmail.com</span>
                            </p>
                        </div>
                    </div>

                    <div className=" hidden md:flex flex-col items-center justify-center gap-6" >

                        <div className="flex gap-6 items-center justify-center text-center font-semibold font-sans text-lg  pt-5 md:pt-0 bg-[#ffffe4]">
                            <Link className="hover:underline hover:text-blue-500" to={'/'}><p>Home</p></Link>
                            <Link className="hover:underline hover:text-blue-500" to={'/All-Crafts'}><p>All Artifacts</p></Link>
                            <Link className="hover:underline hover:text-blue-500" to={'/Add-Craft'}> <p>Add Artifacts</p></Link>
                        </div>

                        <img src="https://img.icons8.com/pieces/64/palace.png" alt="🏰" className="w-10 md:w-20" />

                        <Link to={'/'}>
                            <button
                                className="text-2xl md:text-4xl font-bold font-serif hover:text-yellow-500 w-fit">
                            K-HistoArts
                            </button>
                        </Link>
                    </div>

                    <div className='w-full  md:pl-28 md:pr-5 md:py-16 md:bg-amber-400 md:rounded-s-full md:shadow-lg'>
                        <h3 className="text-2xl font-bold text-black">Connect with Us</h3>
                        <form className="mt-6 space-y-4">
                            <div>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-950"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                        </form>
                        <button
                            // type="submit"
                            className="btn btn-sm md:btn-md btn-outline hover:font-semibold rounded-full my-2"
                        >
                            Send Message
                        </button>
                    </div>

                </div>
            </footer>


            <div className="mx-auto text-center bg-yellow-500 text-black py-2">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-serif font-bold text-center">K-HistoArts</span></p>
            </div>
        </div>
    );
};

export default Footer;