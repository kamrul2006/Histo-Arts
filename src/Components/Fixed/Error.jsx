import { Link } from 'react-router-dom';
import error from '../../assets/error.png'


const Error = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center md:justify-between min-h-screen bg-red-500 px-5 md:px-20'
        // style={{ backgroundImage: `url(${errorbg})` }}
        >

            {/* ------------------text div------------------- */}
            <div className='md:w-1/2 w-full text-white md:space-y-4'>

                <p className='text-2xl md:text-5xl font-bold font-sans'>Sorry, this page is not available.</p>

                <p className='my-2 md:my-5'>    The link you followed may be broken, or the page may have been removed. <br />
                    If there are any other problem we will fix it as soon as possible. </p>

                <div>
                    <Link to={'/'}>
                        <a
                            className="group relative inline-flex items-center overflow-hidden rounded-full bg-white px-8 py-3 text-black focus:outline-none focus:ring active:bg-white"
                            href="#"
                        >
                            <span className="absolute -start-full transition-all group-hover:start-4">
                                <img className='w-6' src="https://img.icons8.com/puffy-filled/32/left.png" alt="left" />
                            </span>

                            <span className="text-sm font-medium transition-all group-hover:ms-4">Go back Home </span>
                        </a>
                    </Link>
                </div>

            </div>

            {/* -------------404 div------- */}
            <div className='w-1/2 mx-auto'>
                <img src={error} alt="404" className='rounded-s-full mx-auto' />
            </div>
        </div>
    );
};

export default Error;