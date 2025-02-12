import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const FeaturedArtifacts = () => {
    const [crafts, setCraft] = useState([])
    useEffect(() => {
        fetch('https://historical-artifacts-tracher-server.vercel.app/allcraft')
            .then(res => res.json())
            .then(data => setCraft(data))
    }, [])


    return (


        <div
            className='text-center bg-base-200  pb-5 md:pb-10'>
            <h1 className='text-2xl  md:text-4xl font-bold md:pt-10 pt-5'>
                Some Of our most Liked Crafts
            </h1>
            <p className='md:pb-10 md:px-64 text-xs px-24 pt-4 pb-6 md:text-lg'>
                Here are some of our most liked arts. to see all arts click on the view all Art button aor for details click on View Details .
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-16 md:mx-10">
                {crafts.slice(0,8).map(Craft =>
                    <div key={Craft._id}>
                        <Slide>
                            <div className="card card-compact bg-base-100  shadow-xl">
                                <figure>
                                    <img
                                        src={Craft.artifactImage}
                                        alt="craft"
                                        className="w-full h-[200px]" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{Craft.artifactName}</h2>

                                    <p className="text-left text-xs h-[80px] overflow-hidden"><b>Historical Context:</b> {Craft.historicalContext}</p>

                                    <div className="card-actions justify-between">
                                        <button className="text-yellow-500 font-bold
                                        ">Total Like: {Craft.Like ? Craft.Like : 0}</button>

                                        <Link to={`/All-Crafts/details/${Craft._id}`}>
                                            <button className="btn btn-warning btn-sm btn-outline rounded-full">  View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>)
                }
            </div>


            <div className="mx-auto my-5 md:mt-14">
                <Link to={"/All-Crafts"}>
                    <button className='btn  btn-sm btn-warning md:btn-md rounded-full shadow-lg shadow-black'>
                        See All Artifacts.
                    </button>
                </Link>

                <p className="text-right px-4 font-semibold text-lg italic opacity-20">  Displayed by <span className="font-serif text-xl">K-HistoArts</span></p>
            </div>
        </div>
    );
};
export default FeaturedArtifacts;