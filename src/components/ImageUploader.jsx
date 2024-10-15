import React, { useState } from 'react';
import changeImageSize from '../js/changeImageSize.js';

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  // Resize image and set preview
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const resizedImage = await changeImageSize(file, 450);
      setPreview(URL.createObjectURL(resizedImage));
      onImageUpload(resizedImage);
    }
  };

  const fileInputStyles = {
    position: 'relative',
  };

  const customButtonStyles = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  return (
    <div className="file_area">
      <label style={fileInputStyles}>
        <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <span style={customButtonStyles}>Dodasz zdjęcie ?</span>
      </label>
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
    </div>
  );
};

export default ImageUploader;
