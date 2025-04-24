import { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useRevalidator } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import nodata from "../assets/nodata.jpg"
import { Fade } from 'react-awesome-reveal';
import { ArrowUp } from 'lucide-react';

const Myadded = () => {
  useEffect(() => {
    document.title = "K-HistoArts || My Added"
  }, [])

  const { user } = useContext(AuthContext);
  const { revalidate } = useRevalidator();
  const data = useLoaderData();

  const myCraft = data.filter(item => item.adderInfo.email === user.email);
  const [AllCraft, setAllCraft] = useState(myCraft);

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://historical-artifacts-tracher-server.vercel.app/allcraft/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              const remaining = myCraft.filter(cr => cr._id !== id);
              setAllCraft(remaining);
              Swal.fire({
                title: "Deleted!",
                text: "Craft has been deleted.",
                icon: "success"
              });
              revalidate();
            }
          });
      }
    });
  }

  const [modalData, setModalData] = useState(null);

  const ModalData = (id) => {
    fetch(`https://historical-artifacts-tracher-server.vercel.app/allcraft/${id}`)
      .then(res => res.json())
      .then(data => {
        setModalData(data);
      });
  }

  const handleCloseModal = () => setModalData(null);

  const HandleUpdateArt = async (e) => {
    e.preventDefault();
    const E = e.target;
    const formData = {
      artifactName: E.artifactName.value,
      artifactImage: E.artifactImage.value,
      artifactType: E.artifactType.value,
      historicalContext: E.historicalContext.value,
      createdAt: E.createdAt.value,
      discoveredAt: E.discoveredAt.value,
      presentLocation: E.presentLocation.value,
      discoveredBy: E.discoveredBy.value,
      adderInfo: {
        name: modalData.adderInfo.name,
        email: modalData.adderInfo.email
      },
      Like: modalData.Like
    }

    fetch(`https://historical-artifacts-tracher-server.vercel.app/allcraft/${modalData._id}`, {
      method: "PUT",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            title: 'Successful',
            text: 'Artifact Updated Properly.',
            icon: 'success',
            confirmButtonText: "It's Great"
          });
        }
        handleCloseModal();
        revalidate();
      });
  }

  return (
    <div className="bg-gradient-to-br from-[#334417] to-[#524d27] min-h-screen text-white px-4 py-8 rounded-2xl">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-yellow-300">My Added Artifacts</h1>
        <h2 className="text-xl italic font-medium text-yellow-100 mb-6">Total Artifacts: {AllCraft.length}</h2>
        <p className="max-w-3xl mx-auto mb-10 text-sm md:text-lg text-gray-300">View, update, or delete the artifacts you’ve added to the archive. Thank you for contributing to historical discovery!</p>
      </div>

      {AllCraft.length === 0 ? (
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold">You added no artifacts</h1>
          <img src={nodata} alt="No Data" className="mx-auto w-1/2 my-6 rounded-xl shadow-md" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {AllCraft.map(craft => (
            <Fade key={craft._id} duration={1500}>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-lg">
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4">
                  <img src={craft.artifactImage} alt={craft.artifactName} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1 mb-4 text-xs text-gray-100">
                  <p className="text-xl font-bold text-yellow-300">{craft.artifactName}</p>
                  <p><span className="font-semibold text-white">Created at:</span> {craft.createdAt}</p>
                  <p><span className="font-semibold text-white">Type:</span> {craft.artifactType}</p>
                  <p><span className="font-semibold text-white">Discovered by:</span> {craft.discoveredBy}</p>
                  <p><span className="font-semibold text-white">Location:</span> {craft.presentLocation}</p>
                </div>
                <div className="flex justify-center gap-3">
                  <button onClick={() => ModalData(craft._id)} className="btn btn-sm btn-outline btn-success text-white">Update</button>
                  <button onClick={() => handleRemove(craft._id)} className="btn btn-sm btn-outline btn-error text-white">Delete</button>
                  <Link to={`/All-Crafts/details/${craft._id}`} className="btn btn-sm btn-outline btn-info text-white">Details</Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      )}

      {modalData && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-white text-black rounded-xl p-6 max-w-2xl w-full overflow-y-auto max-h-[90vh]">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Update Artifact Information</h2>
            <form onSubmit={HandleUpdateArt} className="space-y-4">
              <input type="text" name="artifactName" defaultValue={modalData.artifactName} placeholder="Artifact Name" className="input input-bordered w-full" required />
              <input type="url" name="artifactImage" defaultValue={modalData.artifactImage} placeholder="Artifact Image URL" className="input input-bordered w-full" required />
              <select name="artifactType" defaultValue={modalData.artifactType} className="select select-bordered w-full" required>
                <option disabled>Select Type</option>
                <option>Tools</option>
                <option>Weapons</option>
                <option>Documents</option>
                <option>Writings</option>
                <option>Currency</option>
                <option>Historical Place</option>
              </select>
              <input type="text" name="discoveredBy" defaultValue={modalData.discoveredBy} placeholder="Discovered By" className="input input-bordered w-full" required />
              <textarea name="historicalContext" defaultValue={modalData.historicalContext} placeholder="Historical Context" className="textarea textarea-bordered w-full" required></textarea>
              <input type="text" name="presentLocation" defaultValue={modalData.presentLocation} placeholder="Present Location" className="input input-bordered w-full" required />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" name="createdAt" defaultValue={modalData.createdAt} placeholder="Created At (e.g. 100 BC)" className="input input-bordered w-full" required />
                <input type="text" name="discoveredAt" defaultValue={modalData.discoveredAt} placeholder="Discovered At (e.g. 100 BC)" className="input input-bordered w-full" required />
              </div>
              <div className="flex justify-end gap-3">
                <button type="submit" className="btn btn-success btn-sm">Submit</button>
                <button onClick={handleCloseModal} className="btn btn-error btn-sm">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Myadded;