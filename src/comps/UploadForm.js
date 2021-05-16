import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const typesArray = ['image/png', 'image/jpeg'];

  function handleInputChange(e) {
    let uploadedThing = e.target.files[0];
    console.log(uploadedThing);

    if (uploadedThing && typesArray.includes(uploadedThing.type)) {
      setFile(uploadedThing);
      setError(null);
    } else {
      setError('Please upload an image file (png or jpeg)');
      setFile(null);
    }
  }

  return (
    <form>
      <label>
        <input type='file' onChange={handleInputChange} />
        <span>+</span>
      </label>
      <div className='output'>
        {file && <div> {file.name} </div>}
        {error && <div className='error'> {error}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
}

export default UploadForm;
