/* eslint-disable react-hooks/rules-of-hooks */
import { Fade, Slide } from "react-awesome-reveal";
import { Link, useLoaderData, useRevalidator, } from "react-router-dom";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { SiCmake } from "react-icons/si";
import { LuClipboardType } from "react-icons/lu";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPenNib } from "react-icons/fa";
import { BiCalendar, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiocSec";


const dataDetails = () => {
    const axiosSec = useAxiosSecure()
    const data = useLoaderData()
    const { revalidate } = useRevalidator();
    const { user } = useContext(AuthContext)
    // console.log(data)
    const [liked, setLiked] = useState(false)


    const [LInfo, SetLInfo] = useState([])
    useEffect(() => {
        axiosSec.get(`/liked?email=${user.email}`)
            .then(res => SetLInfo(res.data))
    }, [liked])
    // console.log(LInfo)




    const matchingIds = LInfo.find((i) => i.likeId === data._id)
    console.log(matchingIds);

    useEffect(() => {
        if (matchingIds) {
            setLiked(true)
        }
        else {
            setLiked(false)
        }
    }, [LInfo])


    const handleSubmit = () => {

        const formData = { likeId: data._id, data, email: user.email }
        // console.log(formData);
        if (matchingIds) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You already liked it go to My liked page.",
                showConfirmButton: false,
                timer: 1550
            });
        }
        else {

            fetch('https://historical-artifacts-tracher-server.vercel.app/liked', {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(data => {
                    revalidate()
                    // console.log(data)
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You liked the craft and it is added to My liked page.",
                            showConfirmButton: false,
                            timer: 1550
                        });
                    }
                })
                
        }
    };


    // // -----------------------removing data---------------------
    const handleRemove = () => {
        // console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "You want to un like this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Unlike it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://historical-artifacts-tracher-server.vercel.app/liked/${matchingIds.likeId}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data);
                            if (data.deletedCount > 0) {
                                revalidate()
                                setLiked(false)
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

    const HandleLike = () => {
        setLiked(!liked)
        { liked === false ? handleSubmit() : handleRemove() }
    }




    return (
        <div>

            <div>
                {/* ----------TITLE TEXT-------------- */}
                <div
                    className='text-center bg-[#fdff7e6c] pb-5'>
                    <h1 className='text-3xl md:text-5xl font-bold py-5'>
                        Details About {data.artifactName}
                    </h1>

                    <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg text-gray-500 font-semibold'>
                        Here are all the details about {data.artifactName}. <br /> All the information is shown bellow.
                    </p>

                    <Link to={'/All-Crafts'}>
                        <button
                            className="group relative inline-flex items-center overflow-hidden rounded-full bg-red-400 px-8 py-3 text-black focus:outline-none focus:ring active:bg-red-500"
                            href="#"
                        >
                            <span className="absolute -start-full transition-all group-hover:start-4">
                                <img className='w-6' src="https://img.icons8.com/puffy-filled/32/left.png" alt="left" />
                            </span>

                            <span className="text-sm font-medium transition-all group-hover:ms-4">Go back to All crafts </span>
                        </button>
                    </Link>
                </div>

                <div>
                    <Fade>

                        <div key={data._id} className="card lg:card-side bg-base-100 shadow-xl mx-5 md:m-20 border">
                            <figure className="md:w-1/2 md:h-[500px]">
                                <img
                                    src={data.artifactImage}
                                    alt="image"
                                    className=" w-full h-full object-cover" />
                            </figure>

                            <div className="card-body">
                                <h2 className="card-title md:text-3xl font-bold">{data.artifactName}</h2>
                                <p className="text-left "><b>Historical Context:</b> {data.historicalContext}</p>

                                <div className="text-gray-500 justify-start space-y-3">
                                    <p className="text-left flex items-center gap-2 "><RiCompassDiscoverLine /> <b>Discovered By:</b> {data.discoveredBy}</p>
                                    <p className="text-left flex items-center gap-2"><SiCmake /> <b>Created at :</b> About {data.createdAt}</p>
                                    <p className="text-left flex items-center gap-2 "><LuClipboardType /> <b>Artifact Type:</b> {data.artifactType}</p>

                                    <p className="text-left flex items-center gap-2 "><BiCalendar /> <b>Discoverd At :</b> {data.discoveredAt}</p>

                                    <p className="text-left flex items-center gap-2 "><FaMapLocationDot /> <b>Present Location:</b> {data.presentLocation}</p>
                                </div>

                                <p className="text-right text-xs  text-gray-300 italic flex items-center justify-end gap-2"><FaPenNib /> <b>Added By:</b> {data.adderInfo.name}</p>

                                <div className="card-actions justify-between">
                                    <button>Total Like ({data.Like ? data.Like : 0})</button>

                                    <div className="flex items-center justify-center flex-col">
                                        {liked && <button onClick={HandleLike} className={`btn text-xl btn-circle btn-primary `}><BiSolidLike /></button>}

                                        {!liked && <button onClick={HandleLike} className={`btn text-xl btn-circle btn-neutral `}><BiSolidDislike /></button>}


                                        {/* <button onClick={HandleLike} className={`btn text-xl btn-circle ${liked ? "btn-primary" : "btn-neutral"}`}>{liked ? <BiSolidLike /> : }</button> */}

                                        {liked && <Slide direction="down" duration={500}><p className="text-primary font-mono font-bold text-sm">Liked</p></Slide>}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default dataDetails;