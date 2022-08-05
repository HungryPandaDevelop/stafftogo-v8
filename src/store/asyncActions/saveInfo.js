
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const saveInfo = async (dataForm, cardsId, baseName) => {
  
    try {

      const cardsRef = doc(db, baseName, cardsId);

      await updateDoc(cardsRef, dataForm);

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }