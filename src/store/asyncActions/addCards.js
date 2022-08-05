import { db } from 'firebase.config';

import {
  addDoc,
  collection,
  serverTimestamp
} from 'firebase/firestore';


import { toast } from 'react-toastify';


export const addCards = async (dataForm, baseCards, uid)=>{
 
  try {
    
    dataForm['userRef'] = uid;
    dataForm['timestamp'] = serverTimestamp();

    console.log('data', dataForm);
    await addDoc(collection(db, baseCards), dataForm);

    toast.success('Карточка добавлена');

  } catch (error) {
    toast.error('Невозможно обновить профиль')
    console.log(error)
  }
}