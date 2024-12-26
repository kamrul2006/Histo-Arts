import { useLoaderData } from "react-router-dom";
import nodata from "../assets/nodata.jpg"


const AALLCRAFT = () => {

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
                {data.length == 0 ? <div>
                    <h1 className='md:text-4xl text-2xl font-mono font-black text-center mt-10'>No Visa Available</h1>
                    <img src={nodata} className='mx-auto w-1/2' />
                </div> :


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-10 my-10">
                        {data.map(craft =>
                            <div
                                className=" shadow-md my-4  mx-2 border rounded-md p-2"
                                key={craft._id}>

                                <div className='bg-[#feffbdc2] py-4'>
                                    <div className="w-full h-[200px] px-2 mx-auto">
                                        <img src={craft.artifactImage}
                                            className="w-full h-full object-cover rounded-xl shadow-xl border border-black mx-auto" />
                                    </div>

                                    <div >
                                        {/* ----------------------text-------------------------- */}
                                        <div className='md:py-5 text-center'>

                                            <p className='bg-white text-2xl font-black font-serif italic rounded-full mb-2 w-full'> {craft.countryName}</p>

                                            <h1 className=" font-bold">Visa Type : {craft.visaType}</h1>

                                            <p className=" py-3 ">
                                                Visa Fee: {craft.fee ? craft.fee : 300} $
                                            </p>

                                            <p className=" ">
                                                Visa Application Method: {craft.applicationMethod}
                                            </p>

                                            <p className=" py-3 ">
                                                Visa Processing Time: {craft.processingTime}
                                            </p>

                                            <p className=" ">
                                                Visa Validity: {craft.validity ? craft.validity : "5 years"}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>)}
                    </div>}
            </div>
        </div>
    );
};

export default AALLCRAFT;