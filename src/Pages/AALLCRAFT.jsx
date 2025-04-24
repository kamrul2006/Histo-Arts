import { Link, useLoaderData } from "react-router-dom";
import nodata from "../assets/nodata.jpg";
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { FaSearchengin } from "react-icons/fa";

const AALLCRAFT = () => {
    useEffect(() => {
        document.title = "K-HistoArts || All Arts";
    }, []);

    const Data = useLoaderData();
    const [data, setData] = useState(Data);
    const [search, setSearch] = useState("");
    const [sortAZ, setSortAZ] = useState(false);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    useEffect(() => {
        fetch(`https://historical-artifacts-tracher-server.vercel.app/allcraft?Search=${search}`)
            .then(res => res.json())
            .then(t => {
                let sortedData = t;
                if (sortAZ) {
                    sortedData = [...t].sort((a, b) => a.artifactName.localeCompare(b.artifactName));
                }
                setData(sortedData);
            });
    }, [search, sortAZ]);

    return (
        <div className=" min-h-screen pb-10">
            <div className="text-center py-10">
                <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-wide mb-3">All Historical Artifacts</h1>
                <h2 className="text-xl italic font-medium text-gray-700">Total Arts: {data.length}</h2>
                <p className="text-gray-600 text-base md:text-lg px-5 md:px-40 mt-4">
                    Explore and discover historical treasures. Click on an artifact to dive deeper into its history.
                </p>

                <div className="mt-6 flex justify-center items-center gap-4">
                    <div className="flex items-center bg-white shadow-md rounded-full overflow-hidden border border-blue-300">
                        <div className="px-4 text-2xl text-blue-600"><FaSearchengin /></div>
                        <input
                            type="text"
                            onChange={handleSearchChange}
                            placeholder="Search artifacts by name..."
                            className="p-2 outline-none w-64 rounded-full m-1 text-gray-800"
                        />
                    </div>
                    <button
                        onClick={() => setSortAZ(prev => !prev)}
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Sort A-Z
                    </button>
                </div>
            </div>

            {/* Artifact Cards */}
            {data.length === 0 ? (
                <div className="text-center mt-10">
                    <h1 className='text-2xl md:text-4xl font-bold'>No Artifacts Available</h1>
                    <img src={nodata} alt="No Data" className='mx-auto w-1/2 mt-4' />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-10 mt-10">
                    {data.map(craft => (
                        <Slide key={craft._id}>
                            <div className="card card-compact bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <figure>
                                    <img
                                        src={craft.artifactImage}
                                        alt={craft.artifactName}
                                        className="w-full h-[200px] object-cover rounded-t-2xl"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title font-serif text-lg font-semibold text-gray-800">{craft.artifactName}</h2>
                                    <p className="text-gray-600 text-sm h-[68px] overflow-hidden">
                                        <b>Historical Context:</b> {craft.historicalContext}
                                    </p>
                                    <div className="card-actions justify-between mt-2">
                                        <span className="text-sm text-gray-500">Total Likes: {craft.Like || 0}</span>
                                        <Link to={`/All-Crafts/details/${craft._id}`}>
                                            <button className="btn btn-sm btn-outline btn-warning rounded-full">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AALLCRAFT;
