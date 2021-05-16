import React from 'react';

function Modal({ chosenImage, setChosenImage }) {
  function handleImgExit(event) {
    if (event.target.classList.contains('backdrop')) {
      setChosenImage(null);
    }
  }

  return (
    <div className='backdrop' onClick={handleImgExit}>
      <img src={chosenImage} alt='bigger image' />
    </div>
  );
}

export default Modal;
