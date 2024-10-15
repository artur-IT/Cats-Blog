import React, { useRef, useState } from 'react';
import changeImageSize from '../js/changeImageSize.js';

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Resize image and set preview
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const resizedImage = await changeImageSize(file, 450);
      setPreview(URL.createObjectURL(resizedImage));
      onImageUpload(resizedImage);
    }
  };

  return (
    // <div className="file_area">
    //   <input type="file" accept="image/*" onChange={handleFileChange} />
    //   {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
    // </div>
    <div className="file_area">
      <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} style={{ display: 'none' }} />
      <button className="file-input-button" onClick={() => fileInputRef.current.click()}>
        Dodasz zdjęcie?
      </button>
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
    </div>
  );
};

export default ImageUploader;
