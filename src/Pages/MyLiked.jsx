import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiocSec";
import nodata from "../assets/nodata.jpg"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";



const MyLiked = () => {
    useEffect(() => {
        document.title = "K-HistoArts || My Liked"
    }, [])



    const axiosSec = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])
    const [load, reload] = useState(true)

    useEffect(() => {
        axiosSec.get(`/liked?email=${user.email}`)
            .then(res => setData(res.data))
    }, [load])


    // // -----------------------removing data---------------------
    const handleRemove = (id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You want to unlike this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Unlike it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://historical-artifacts-tracher-server.vercel.app/liked/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            reload(!load)
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Unlike!",
                                    text: "Craft has been Unlike.",
                                    icon: "success"
                                });
                            }
                        });
                }
            })
    }


    return (
        <div className="border">
            <div className="text-center text-2xl py-5 bg-amber-200">
                My liked artifacts
            </div>


            {data.length == 0 ?
                <div>
                    <h1 className='md:text-4xl text-2xl font-mono font-black text-center mt-10'>No Liked Artifacts.</h1>
                    <img src={nodata} className='mx-auto w-1/2' />
                </div> :
                <div className=" w-full">
                    <table className="table w-full overflow-x-scroll z-10">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Artifact Name</th>
                                <th>Details</th>
                                <th>Added By</th>
                                <th>Unlike</th>
                                <th>Details</th>
                            </tr>
                        </thead>


                        <tbody>

                            {data.map(D =>
                                <tr key={D._id}>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={D.data.artifactImage}
                                                    alt="Artifact" />
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <p className="text-lg font-semibold">{D.data.artifactName}</p>
                                    </td>

                                    <td className="text-xs text-gray-500">
                                        <p>Discoverd By: {D.data.discoveredBy}</p><hr />
                                        <p>Discoverd At: {D.data.discoveredAt}</p><hr />
                                        <p>Location: {D.data.presentLocation}</p>
                                    </td>

                                    <td className="text-xs italic text-gray-300">
                                        Added By: <br />
                                        {D.data.adderInfo.name}
                                    </td>

                                    <th>
                                        <button onClick={() => handleRemove(D.likeId)} className="btn btn-info btn-outline btn-xs">UnLike</button>
                                    </th>

                                    <td>
                                        <Link to={`/All-Crafts/details/${D.data._id}`}><button className="btn btn-xs  text-xs btn-warning mx-2 md:mx-0 btn-outline">Details
                                        </button></Link>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            }

            <div className="mx-auto myt3 md:mt-10 bg-amber-200 flex justify-center py-4">
                <Link to={'/All-Crafts'}><Button pill gradientDuoTone="purpleToBlue"><p className="text-base px-5">Go to All-Arts</p></Button></Link>
            </div>

        </div >
    );
};

export default MyLiked;