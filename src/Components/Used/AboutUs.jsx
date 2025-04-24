import pic from "../../assets/About.png";

const AboutUs = () => {
    return (
        <section className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-5 gap-8 bg-gradient-to-r from-amber-50 via-teal-200 to-yellow-100">

            <div className="col-span-1 hidden md:flex items-center justify-center">
                <img src={pic} className="w-3/4 rounded-xl  transform transition-all duration-300 hover:scale-105" />
            </div>

            <div className="col-span-4 bg-white shadow-xl rounded-xl mx-5 py-10 px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h2>

                <p className="text-center text-lg text-gray-700 mb-8 leading-relaxed">
                    Welcome to <span className="text-blue-600">K-HistoArts</span>, the platform where you can explore the history and learn about the stories behind the various artifacts. Our goal is to make history more interesting and easily understandable for everyone. Join us in preserving and sharing the past!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Explore Artifacts */}
                    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                        <span className="text-5xl text-blue-500 mb-4">🏺</span>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore Artifacts</h3>
                        <p className="text-gray-600 text-center">
                            Discover unique artifacts from all corners of the world, each with a rich history and story to tell.
                        </p>
                    </div>

                    {/* Connect with History */}
                    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                        <span className="text-5xl text-green-500 mb-4">🌍</span>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect with History</h3>
                        <p className="text-gray-600 text-center">
                            Understand the culture, customs, and the individuals who contributed to shaping the world through their artifacts.
                        </p>
                    </div>

                    {/* Share Knowledge */}
                    <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                        <span className="text-5xl text-red-500 mb-4">📖</span>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Share Knowledge</h3>
                        <p className="text-gray-600 text-center">
                            Join our community of history lovers to share your knowledge and contribute to preserving the past.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p className="text-lg text-gray-600 px-6">
                        At <span className="font-bold text-blue-600">K-HistoArts</span>, we believe that history has the power to change the world and create a better future. Together, let’s save the past and enjoy the richness of history.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
