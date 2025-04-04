import React, { useState } from 'react';
import { S3AccessTool } from "../../tools/s3AccessTool";
import { useDispatch } from 'react-redux';
import { setUpdateStateInfo } from '../../redux/action/stateInfo';
import imageCompression from 'browser-image-compression';

function FileUpload({stateName, onClose}) {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      const options = {
        maxSizeMB: 1.5,           // Max size in MB
        maxWidthOrHeight: 4096, // Resize image to within 1024px width/height
        useWebWorker: true,
      };
      setFile(await imageCompression(file, options));
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64File = reader.result.split(',')[1]; // Strip out base64 prefix
        const payload = {
          key: `${stateName}_${file.name}`, //update key to be state_fileName
          file_body: base64File,
        };
        S3AccessTool({
          operation: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }).then(response => {
          dispatch(setUpdateStateInfo());
          onClose();
        }).catch(err => console.log(err));
      };

      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
