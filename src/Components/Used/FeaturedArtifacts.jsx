import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
    const [crafts, setCraft] = useState([]);
    useEffect(() => {
        fetch('https://historical-artifacts-tracher-server.vercel.app/allcraft')
            .then(res => res.json())
            .then(data => setCraft(data));
    }, []);

    return (
        <div className='bg-gradient-to-r from-amber-50 to-yellow-100 py-12'>
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='text-3xl font-extrabold text-gray-800 md:text-5xl'>
                    Some of Our Most Liked Crafts
                </h1>
                <p className='mt-4 text-lg text-gray-600 md:px-24 px-8'>
                    Discover some of the most popular artifacts from our collection.
                    To explore more, click on 'See All Artifacts', or for more details, click 'View Details'.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:px-16 px-6 py-8">
                {crafts.slice(0, 8).map(Craft =>
                    <div key={Craft._id} className="transition-transform duration-500 ease-in-out transform hover:scale-105">
                        <Slide>
                            <div className="card card-compact bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                                <figure className="relative">
                                    <img
                                        src={Craft.artifactImage}
                                        alt={Craft.artifactName}
                                        className="w-full h-[200px] object-cover rounded-t-lg"
                                    />
                                    <div className="absolute top-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white  font-semibold font-serif rounded-t-lg">
                                        <span className="font-semibold">{Craft.artifactName}</span>
                                    </div>
                                </figure>
                                <div className="card-body p-4">
                                    <p className="text-sm text-gray-700 overflow-hidden h-16 ">
                                        <strong>Historical Context:</strong> {Craft.historicalContext}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <button className="text-yellow-600 font-semibold">
                                            Total Likes: {Craft.Like ? Craft.Like : 0}
                                        </button>
                                        <Link to={`/All-Crafts/details/${Craft._id}`}>
                                            <button className="btn btn-warning btn-sm btn-outline rounded-full">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                )}
            </div>

            <div className="text-center mt-10">
                <Link to={"/All-Crafts"}>
                    <button className='btn btn-warning text-gray-600 hover:text-black py-2 px-6 rounded-full shadow-lg hover:px-8 transition-colors'>
                        See All Artifacts
                    </button>
                </Link>
                <p className="mt-4 text-right font-semibold text-lg italic opacity-20">
                    Displayed by <span className="font-serif text-xl">K-HistoArts</span>
                </p>
            </div>
        </div>
    );
};

export default FeaturedArtifacts;
