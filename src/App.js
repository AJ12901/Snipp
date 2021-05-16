import React, { useState } from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  const [chosenImage, setChosenImage] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      <ImageGrid setChosenImage={setChosenImage} />
      {chosenImage && (
        <Modal chosenImage={chosenImage} setChosenImage={setChosenImage} />
      )}
    </div>
  );
}

export default App;
