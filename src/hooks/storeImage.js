import { db } from 'firebase.config';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

const auth = getAuth();

const storeImage = async (image) => {
  return new Promise((resolve, reject) => {
    const storage = getStorage();
    const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
    const storageRef = ref(storage, 'images/' + fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);

    // import from firebase build/ storage/ web/ upload file/
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log('file upload error', error)
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          resolve(downloadURL);
        });
      }
    );
    // import from firebase build/ storage/ web/ upload file/

  })
}

export default storeImage