import pic from "../../assets/About.png"


const AboutUs = () => {

    return (
        <section className="bg-base-200 py-12 md:py-20 grid grid-cols-1 md:grid-cols-5">

            <div className="col-span-1 hidden md:flex items-center justify-center">
                <img src={pic} className="w-1/2 mx-auto"/>
            </div>

            <div className="col-span-4 bg-base-100 shadow-md rounded-lg mx-5 py-10">
                <div className=" px-6">

                    <h2 className="text-4xl font-bold text-center  mb-6">About Us</h2>

                    <p className="text-center  text-lg text-gray-600 mb-8">
                        Welcome to K-HistoArts, the platform through  which you can explore the history and learn about the stories behind the various artifacts. Our goal is to  make history more interesting and easily understandable to everyone and thus encourage people to keep an eye on the  past.
                    </p>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10">


                    <div className="flex flex-col items-center bg-gray-50 p-6  rounded-lg shadow-md">

                        <span className="text-4xl text-blue-500  mb-4">🏺</span>

                        <h3 className="text-xl font-bold text-gray-800  mb-2">Explore Artifacts</h3>

                        <p className="text-gray-600  text-center">
                            Here you will find various artifacts from different parts of the world each being unique in its history  and the history it tells.
                        </p>

                    </div>

                    <div className="flex flex-col  items-center bg-gray-50  p-6 rounded-lg shadow-md">

                        <span className="text-4xl  text-green-500 mb-4">🌍</span>

                        <h3 className="text-xl  font-bold text-gray-800 mb-2">Connect with History</h3>

                        <p className="text-gray-600 text-center">
                            It will help you understand the culture, customs, and the  individuals that contributed to the development of this world through their artifacts.
                        </p>

                    </div>


                    <div className="flex flex-col items-center bg-gray-50  p-6 rounded-lg shadow-md">

                        <span className="text-4xl text-red-500 mb-4">📖</span>

                        <h3 className="text-xl font-bold text-gray-800 mb-2">Share  Knowledge</h3>

                        <p className="text-gray-600 text-center">
                            This is a community of history  lovers where you can express yourself and contribute as much information as you want about the subject.
                        </p>

                    </div>

                </div>


                <div className="text-center mt-8">

                    <p className="text-gray-600 text-lg px-5">
                        At K-HistoArts we are proud of the fact  that history can change the world and make it a better place. Together, let’s save the past  and enjoy the value of history.
                    </p>

                </div>
            </div>


        </section>
    )
};

export default AboutUs;