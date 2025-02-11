import { Link, useLoaderData } from "react-router-dom";
import nodata from "../assets/nodata.jpg"
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaSearchengin } from "react-icons/fa";


const AALLCRAFT = () => {
    useEffect(() => {
        document.title = "K-HistoArts || All Arts"
    }, [])

    const Data = useLoaderData()

    const [data, setData] = useState(Data)
    // console.log(data)

    //------------------------------Search------------------
    const [Search, setSearch] = useState("")
    const HandleS = (e) => {
        const Value = e.target.value
        // console.log(Value)
        setSearch(Value)
    }

    useEffect(() => {
        fetch(`https://historical-artifacts-tracher-server.vercel.app/allcraft?Search=${Search}`)
            .then(res => res.json())
            .then(t => {
                // console.log(t)
                setData(t)
            })
    }, [Search])
    // console.log(Search)


    return (
        <div className="bg-amber-50">
            <div>
                {/* ----------TITLE TEXT-------------- */}
                <div
                    className='text-center bg-[#eeff9079]'>
                    <h1 className='text-2xl md:text-5xl font-bold py-5'>
                        All Historical Artifacts
                    </h1>

                    <h2 className="text-xl font-serif italic text-center my-1 font-semibold">Total Arts: {data.length}</h2>

                    <p className='md:pb-5 md:px-56 text-xs px-24 pb-6 md:text-lg'>
                        Here are all the arts. Chose click on the details button to see all details.
                    </p>

                    <div className='pb-5'>
                        <div className='flex justify-between items-center gap-2  bg-sky-300 border border-amber-700 pl-4 w-1/3 mx-auto rounded-ss-3xl rounded-ee-3xl shadow-md shadow-black/40' >

                            <div className=" w-10 flex items-center justify-center">
                                <h2 className='md:text-3xl font-bold text-center text-amber-600'><FaSearchengin /></h2>
                            </div>

                            <input onChange={HandleS} type="text" placeholder="Search For Artifacts (on Name)." className="p-3 bg-white  md:w-full border-none rounded-ee-3xl " />
                        </div>
                    </div>
                </div>


                {/* --------------------------all visa--------------------- */}
                {data.length == 0 ?
                    <div>
                        <h1 className='md:text-4xl text-2xl font-mono font-black text-center mt-10'>No Artifacts Available</h1>
                        <img src={nodata} className='mx-auto w-1/2' />
                    </div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10 md:mx-10 my-10">
                        {data.map(Craft =>
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
                                            <h2 className="card-title font-serif font-semibold">{Craft.artifactName}</h2>

                                            <p className="text-left h-[100px]  text-xs"><b>Historical Context:</b> {Craft.historicalContext}</p>

                                            <div className="card-actions justify-between">
                                                <button>Total Like ({Craft.Like ? Craft.Like : 0})</button>

                                                <Link to={`/All-Crafts/details/${Craft._id}`}>
                                                    <button className="btn btn-warning
                                                     btn-sm btn-outline rounded-full">  View Details</button>
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