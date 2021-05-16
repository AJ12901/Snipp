// takes image from ProgressBar, which gets it passed as a prop from UploadForm, and throws it into the storage and the database (when ofcourse, the hook is used in ProgressBar)

import { useState, useEffect } from 'react';
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from '../firebase/config';

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const fileRefernce = projectStorage.ref(file.name);
    const collectionReference = projectFirestore.collection('images');

    // the "on" listener fires functions when certain events happen
    // event is 'state_changed', second argument is the FX that fires when said state changes, third argument is a FX that fires if there's an error, and last argument is a FX that fires when upload is complete
    fileRefernce.put(file).on(
      'state_changed',
      (snapshot) => {
        let percentageUploaded =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentageUploaded);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const retreivedURL = await fileRefernce.getDownloadURL();
        collectionReference.add({ url: retreivedURL, createdAt: timestamp() });
        setUrl(retreivedURL);
      }
    );
  }, [file]);

  return { progress, url, error };
}

export default useStorage;
