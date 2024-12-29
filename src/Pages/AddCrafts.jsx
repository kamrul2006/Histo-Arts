import { Zoom } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const AddCraft = () => {
        useEffect(() => {
            document.title = "K-HistoArts || Add Arts"
        }, [])

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault();

        const E = e.target
        const artifactName = E.artifactName.value
        const artifactImage = E.artifactImage.value
        const artifactType = E.artifactType.value
        const historicalContext = E.historicalContext.value
        const createdAt = E.createdAt.value
        const discoveredAt = E.discoveredAt.value
        const presentLocation = E.presentLocation.value
        const AddName = E.hr_name.value
        const discoveredBy = E.discoveredBy.value


        const formData = {
            artifactName,
            artifactImage,
            artifactType,
            historicalContext,
            createdAt,
            discoveredAt,
            presentLocation,
            adderInfo: {
                name: AddName,
                email: user.email
            },
            discoveredBy,
            Like: 0
        }

        // console.log(formData);


        fetch('http://localhost:5000/allcraft', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful',
                        text: 'You added a job SuccessFully.',
                        icon: 'success',
                        confirmButtonText: "OK"
                    })
                    E.reset()
                    navigate('/All-Crafts')
                }

            })
    };


    return (
        <div>

            <div className="border m-5 md:m-10 rounded-md shadow-lg">
                {/* ----------------header------------- */}
                <div className="bg-gray-300 py-3 px-2 md:px-10">
                    {/* --title--- */}
                    <Zoom direction="left" delay={50}>
                        <h1
                            className="text-center mb-5 text-blue-700 text-3xl md:text-5xl font-bold md:mt-10 ">
                            Add a New Artifact.
                        </h1>
                    </Zoom>

                    <p className="text-center text-xs md:text-sm w-3/4 my-2 md:mb-8 mx-auto">
                      Add all the correct information you know about the artifact. An help people know about the history behind our modern world.
                    </p>
                </div>


                <div className="mx-5 md:mx-20 px-3 md:px-10 my-4 md:my-10 py-2 md:py-5 bg-base-200 rounded-md">

                    <h1 className="text-center text-2xl font-bold my-5 ">Add All The Artifact Information</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* artifactName */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Artifact Name
                            </label>
                            <input
                                type="text"
                                id="artifactName"
                                name="artifactName"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 sm:text-sm"
                                placeholder="Enter your Artifact name"
                                required
                            />
                        </div>

                        {/* artifactImage */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Artifact Image
                            </label>
                            <input
                                type="url"
                                id="artifactImage"
                                name="artifactImage"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 sm:text-sm"
                                placeholder="Enter your Artifact Image link"
                                required
                            />
                        </div>

                        {/* artifactType */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Artifact Type
                            </label>
                            <select
                                id="bxs"
                                name="artifactType"
                                defaultValue={'Select Your Artifact Type'}
                                className="select select-bordered w-full">
                                <option disabled>Select Your Artifact Type</option>
                                <option>Tools</option>
                                <option>Weapons</option>
                                <option>Documents</option>
                                <option>Writings</option>
                                <option>Currency</option>
                            </select>
                        </div>

                        {/* discoveredBy */}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                Discovered By
                            </label>
                            <input
                                type="text"
                                id="li"
                                name="discoveredBy"
                                placeholder="Add who discoverd."

                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 p-2 rounded-md"
                                required
                            />
                        </div>

                        {/* Historical Context*/}
                        <div className="mb-4">
                            <label className="block font-medium text-gray-700 ">Historical Context
                            </label>
                            <textarea
                                id="historicalContext"
                                name="historicalContext"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Write historical Context of the craft"
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        {/* location */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Present Location
                            </label>
                            <input
                                type="text"
                                id="presentLocation"
                                name="presentLocation"

                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                placeholder="Enter your present location of the art"
                                required
                            />
                        </div>

                        {/*  times  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">

                            {/* Created at */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Created At
                                </label>
                                <input
                                    type="text"
                                    id="createdAt"
                                    name="createdAt"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                    placeholder="Enter creation time. ' (e.g. 100 BC)' "
                                    required
                                />
                            </div>

                            {/*  Discovered At  */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Discovered At
                                </label>
                                <input
                                    type="text"
                                    id="discoveredAt"
                                    name="discoveredAt"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
                                    placeholder="Enter discoverd time. ' (e.g. 100 BC)' "
                                    required
                                />
                            </div>

                        </div>

                        {/*adder name*/}
                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                                Added By
                            </label>
                            <input
                                type="text"
                                id="resume"
                                name="hr_name"
                                placeholder="Input hr_name"
                                defaultValue={user.displayName}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 p-2 rounded-lg"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Upload Artifact 
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCraft;
