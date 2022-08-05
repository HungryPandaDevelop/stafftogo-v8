import { 
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import { db } from 'firebase.config';

import {
  doc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const registrationAccount = async (formData) => {
  const { name, email, password } = formData;

  try {
    /* add to base auth */
  
    
    const auth = getAuth();

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    updateProfile(auth.currentUser, {
      displayName: name
    });
    /* add to base auth */

    /* add to firestore base */
    const user = userCredential.user;

    const formDataCopy = { ...formData, uid: user.uid };

    delete formDataCopy.password;

    formDataCopy.timestamp = serverTimestamp();

    await setDoc(doc(db, 'users', user.uid), formDataCopy);
    /* add to firestore base */
    
    //window.location = '/cabinet/';
    //
    toast.success('Rегистрация успешна');
  

  } catch (error) {
    console.log(error)
    toast.error('Ошибка регистрации');
  }
}
    
