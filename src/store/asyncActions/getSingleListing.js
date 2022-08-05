import { getDoc, doc, } from 'firebase/firestore';
import { db } from 'firebase.config';

export const getSingleListing = async (category, id) => {
  const docRef = doc(db, category, id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}