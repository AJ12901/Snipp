// cycles through database and outputs each image using link in database
import React from 'react';
import useFirestore from './useFirestore';

function ImageGrid({ setChosenImage }) {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <div
            className='img-wrap'
            key={doc.id}
            onClick={() => setChosenImage(doc.url)}
            style={{ cursor: 'pointer' }}
          >
            <img src={doc.url} alt='uploaded pic' />
          </div>
        ))}
    </div>
  );
}

export default ImageGrid;
