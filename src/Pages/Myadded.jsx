import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import nodata from "../assets/nodata.jpg"



const Myadded = () => {
  const { user } = useContext(AuthContext)

  const data = useLoaderData()

  const myCraft = data.filter(data => data.adderInfo.email == user.email);
  // console.log(myCraft)

  const [AllCraft, setAllCraft] = useState(myCraft)


  // // -----------------------removing data---------------------
  const handleRemove = (id) => {
    // console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/allcraft/${id}`, {
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              // console.log(data);
              if (data.deletedCount > 0) {
                const remaining = myCraft.filter(cr => cr._id !== id)
                setAllCraft(remaining)
                Swal.fire({
                  title: "Deleted!",
                  text: "Craft has been deleted.",
                  icon: "success"
                });
              }
            });
        }
      })
  }

  //-------------------------data for modal-------------------
  const [modal, setModal] = useState([])
  const ModalData = (id) => {
    fetch(`http://localhost:5000/allcraft/${id}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setModal(data)
      })
  }

  const [modalOpen, setModalOpen] = useState(false);
  const handleButtonClick = () => {
    setModalOpen(false);
  };

  // //--------------------------handle update -----------------
  const HandleUpdateArt = async (e) => {
    e.preventDefault();
    const E = e.target
    const artifactName = E.artifactName.value
    const artifactImage = E.artifactImage.value
    const artifactType = E.artifactType.value
    const historicalContext = E.historicalContext.value
    const createdAt = E.createdAt.value
    const discoveredAt = E.discoveredAt.value
    const presentLocation = E.presentLocation.value
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
        name: modal.adderInfo.name,
        email: modal.adderInfo.email
      },
      discoveredBy,
      Like: modal.Like
    }


    // console.log(formData)

    // ----------------sending data to server---------------
    fetch(`http://localhost:5000/allcraft/${modal._id}`, {
      method: "PUT",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Successful',
            text: 'Artifact Updated Properly.',
            icon: 'success',
            confirmButtonText: "It's Great"
          })
        }
        handleButtonClick()
      })
  }




  return (
    <div>
      <div>
        {/* ----------TITLE TEXT-------------- */}
        <div
          className='text-center bg-[#fff59c7e] '>
          <h1 className='text-3xl md:text-6xl font-bold py-5'>
            My Added Artifacts.
          </h1>

          <h2 className="text-xl font-serif italic text-center my-3 font-semibold">Total Artifacts: {AllCraft.length}</h2>

          <p className='md:pb-10 md:px-56 text-xs px-24 pb-6 md:text-lg'>
            Here are all the artifacts that you added . Chose your Artifact to delete or update the information as needed.
          </p>
        </div>


        {/* --------------------------all visa--------------------- */}
        {AllCraft.length == 0 ? <div>
          <h1 className='md:text-4xl text-2xl font-mono font-black text-center mt-10'>You added no artifacts</h1>
          <img src={nodata} className='mx-auto w-1/2' />
        </div> :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 md:mx-10 my-10">
            {AllCraft.map(craft =>
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

                      <p className='bg-white text-2xl font-black font-serif italic rounded-full mb-2 w-full'> {craft.artifactName}.</p>

                      <h1 className=" font-bold"> Created at: {craft.createdAt}.</h1>

                      <p className=" ">
                        Type : {craft.artifactType}.
                      </p>

                      <p className="">
                        Discoverd by : {craft.discoveredBy} .
                      </p>

                      <p className="">
                        Location : {craft.presentLocation}.
                      </p>

                    </div>


                    {/* --------------buttons---------------------- */}
                    <div className="flex justify-center gap-5">

                      {/*-----update */}

                      <button onClick={() => {
                        ModalData(craft._id)
                        setModalOpen(true)
                      }} className="btn btn-outline  text-xs btn-sm btn-success">
                        Update
                      </button>


                      {/* -----delete */}
                      <button onClick={() => handleRemove(craft._id)} className="btn btn-sm text-xs btn-error mx-2 md:mx-0 btn-outline">
                        Delete
                      </button>
                    </div>

                  </div>
                </div>



                {modalOpen && <div
                  className="top-0 left-0 fixed w-full h-full flex items-center justify-center bg-[#fff12736] backdrop-blur z-50"
                >
                  <div className="rounded  p-2 bg-white md:w-1/2 w-full m-4 md:m-0">

                    <div className="mb-3 h-fit px-4 py-2">

                      <div className='rounded-full p-1 '>
                        <h2 className='text-xl font-bold text-center text-blue-600  '>Update Artifact information.</h2>
                      </div>

                      <form onSubmit={HandleUpdateArt} className="space-y-1">

                        {/* artifactName */}
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Artifact Name
                          </label>
                          <input
                            type="text"
                            id="artifactName"
                            name="artifactName"
                            defaultValue={modal.artifactName}
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
                            defaultValue={modal.artifactImage}
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
                            defaultValue={modal.artifactType}
                            className="rounded-lg text-sm text-gray-500 w-full" required>
                            <option disabled>Select Your Artifact Type</option>
                            <option>Tools</option>
                            <option>Weapons</option>
                            <option>Documents</option>
                            <option>Writings</option>
                            <option>Currency</option>
                            <option>Historical Place</option>
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
                            defaultValue={modal.discoveredBy}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 p-2 rounded-md"
                            required
                          />
                        </div>

                        {/* Historical Context*/}
                        <div className="">
                          <label className="block font-medium text-gray-700 ">Historical Context
                          </label>
                          <textarea
                            id="historicalContext"
                            name="historicalContext"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1"
                            placeholder="Write historical Context of the craft"
                            defaultValue={modal.historicalContext}
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
                            defaultValue={modal.presentLocation}
                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
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
                              defaultValue={modal.createdAt}
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
                              defaultValue={modal.discoveredAt}
                            />
                          </div>

                        </div>


                        {/* Submit Button */}
                        <div className="flex gap-2 justify-center">

                          <input
                            type="submit"
                            className="btn btn-sm btn-success mt-3"
                            value={'Submit'}
                          />
                          <button
                            className="btn btn-sm  btn-error mt-3"
                            onClick={handleButtonClick}
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>}



              </div>)}
          </div>}
      </div>


    </div>
  );
};

export default Myadded;