import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(
    "https://i.pravatar.cc/300?img=12"
  );

  const [likeCount, setLikeCount] = useState(0);

  // Open file selector using useRef
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Handle selected image
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  // Like button
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="page">
      <div className="profile-card">
        <h1>My Profile</h1>

        <div className="profile-image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden-input"
        />

        {/* Custom Upload Button */}
        <button className="upload-btn" onClick={handleUploadClick}>
          📷 Upload Image
        </button>

        {/* Like Button */}
        <button className="like-btn" onClick={handleLike}>
          ❤️ Like
        </button>

        <p className="like-count">
          Likes: <strong>{likeCount}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;