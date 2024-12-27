import { Link, useLoaderData } from "react-router-dom";
import nodata from "../assets/nodata.jpg"
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";


const AALLCRAFT = () => {
    useEffect(() => {
        document.title = "K-HistoArts || AllCrafts"
    }, [])

    const data = useLoaderData()

    console.log(data)

    return (
        <div>
            <div>
                {/* ----------TITLE TEXT-------------- */}
                <div
                    className='text-center bg-[#87A922] rounded-b-full md:mx-20'>
                    <h1 className='text-3xl md:text-6xl font-bold py-5'>
                        All Historical ArtyCrafts
                    </h1>

                    <h2 className="text-xl font-serif italic text-center my-3 font-semibold">Total Arts: {data.length}</h2>

                    <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                        Here are all the arts. Chose click on the details button to see all details.
                    </p>
                </div>


                {/* --------------------------all visa--------------------- */}
                {data.length == 0 ?
                    <div>
                        <h1 className='md:text-4xl text-2xl font-mono font-black text-center mt-10'>No Visa Available</h1>
                        <img src={nodata} className='mx-auto w-1/2' />
                    </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 md:mx-10 my-10">
                        {data.map(Craft =>
                            <div key={Craft._id}>
                                <Slide>
                                    <div className="card card-compact bg-base-100 w-96 shadow-xl">
                                        <figure>
                                            <img
                                                src={Craft.artifactImage}
                                                alt="craft"
                                                className="w-full h-[200px]" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{Craft.artifactName}</h2>

                                            <p className="text-left h-[120px]"><b>Historical Context:</b> {Craft.historicalContext}</p>

                                            <div className="card-actions justify-between">
                                                <button>Total Like ({Craft.Like ? Craft.Like : 0})</button>

                                                <Link to={`/All-Crafts/details/${Craft._id}`}>
                                                    <button className="btn btn-primary btn-sm btn-outline rounded-full">  View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            </div>)
                        }
                    </div>
                }

            </div>
        </div>)
};

export default AALLCRAFT;