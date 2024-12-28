import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiocSec";

const MyLiked = () => {
    const axiosSec = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const [data, setData] = useState([])

    useEffect(() => {
        axiosSec.get(`/liked?email=${user.email}`)
            .then(res => setData(res.data))

    }, [])



    return (
        <div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Artifact Name</th>
                            <th>Details</th>
                            <th>Added By</th>
                            <th>Unlike</th>
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
                                    <button className="btn btn-info btn-outline btn-xs">UnLike</button>
                                </th>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyLiked;