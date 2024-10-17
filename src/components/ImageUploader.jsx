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

  return (
    <div className="file_area">
      <label>
        <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        <span className="btn_add_picture">Dodasz zdjęcie ?</span>
      </label>
      {preview && <img src={preview} alt="Preview" className="file_preview" />}
    </div>
  );
};

export default ImageUploader;
