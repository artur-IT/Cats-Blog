import React, { useState } from 'react';
import changeImageSize from '../js/changeImageSize.js';

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const resizedImage = await changeImageSize(file, 450);
      setPreview(URL.createObjectURL(resizedImage));
      onImageUpload(resizedImage);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
    </div>
  );
};

export default ImageUploader;
