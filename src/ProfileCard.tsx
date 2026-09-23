import { useEffect, useRef, useState } from "react";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80";

export default function ProfileCard() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>(DEFAULT_IMAGE);
  const [likeCount, setLikeCount] = useState<number>(0);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const nextUrl = URL.createObjectURL(file);
    setPreview((currentPreview) => {
      if (currentPreview.startsWith("blob:")) {
        URL.revokeObjectURL(currentPreview);
      }
      return nextUrl;
    });
  };

  useEffect(() => {
    return () => {
      if (preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <div className="profile-card">
      <h1>My Profile</h1>

      <div className="profile-image-container">
        <img src={preview} alt="Profile preview" className="profile-image" />
      </div>

      <input
        ref={inputRef}
        className="hidden-input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        aria-label="Upload profile image"
      />

      <button type="button" className="upload-btn" onClick={handleUploadClick}>
        Upload Image
      </button>

      <button
        type="button"
        className="like-btn"
        onClick={() => setLikeCount((currentCount) => currentCount + 1)}
        aria-label="Like profile"
      >
        ♡ Like
      </button>

      <div className="like-count">Likes: {likeCount}</div>
    </div>
  );
}
