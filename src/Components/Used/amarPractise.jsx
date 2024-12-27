import { useState, useEffect } from "react";
import axios from "axios";

const ArtifactDetails = ({ artifactId }) => {
  const [artifact, setArtifact] = useState(null);
  const [liked, setLiked] = useState(false); // Liked state
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    // Fetch artifact details
    const fetchArtifactDetails = async () => {
      try {
        const response = await axios.get(`/artifact/${artifactId}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setArtifact(response.data);
        setLikeCount(response.data.likeCount);
        setLiked(response.data.likedBy.includes(localStorage.getItem("userId"))); // Check if user has liked
      } catch (error) {
        console.error(error);
      }
    };
    fetchArtifactDetails();
  }, [artifactId]);

  // Toggle like/dislike
  const toggleLike = async () => {
    try {
      const response = await axios.put(`/artifact/${artifactId}/toggle-like`, null, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setLikeCount(response.data.likeCount);
      setLiked(response.data.liked);
    } catch (error) {
      console.error(error);
    }
  };

  if (!artifact) return <div>Loading...</div>;

  return (
    <div>
      <h1>{artifact.name}</h1>
      <img src={artifact.imageUrl} alt={artifact.name} />
      <p>{artifact.historicalContext}</p>
      <p>Likes: {likeCount}</p>
      <button
        onClick={toggleLike}
        style={{ backgroundColor: liked ? "red" : "gray" }}
      >
        {liked ? "Dislike" : "Like"}
      </button>
    </div>
  );
};

export default ArtifactDetails;
