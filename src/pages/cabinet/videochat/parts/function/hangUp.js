import { db } from 'firebase.config';
import { collection, doc, setDoc, addDoc, getDoc, onSnapshot, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';

const hangUp = async (pc,roomId)=>{
  pc.close();

    if (roomId) {
      let roomRef = doc(collection(db, "calls"), roomId);
      await getDocs(collection(roomRef, "answerCandidates"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            deleteDoc(roomRef);
          });
        });
      await getDocs(collection(roomRef, "offerCandidates"))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            deleteDoc(roomRef);
          });
        });

      await deleteDoc(roomRef);
    }

    window.location.reload();
}

export default hangUp;