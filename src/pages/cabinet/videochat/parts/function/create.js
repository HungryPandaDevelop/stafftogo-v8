import { db } from 'firebase.config';
import { collection, doc, setDoc, addDoc, getDoc, onSnapshot, updateDoc, getDocs, deleteDoc } from 'firebase/firestore';

const createCall = async (setRoomId, pc, userId, uid) => {
  console.log('createCall');
  
  const callDoc = doc(collection(db, "calls"));
  const offerCandidates = collection(callDoc, "offerCandidates");
  const answerCandidates = collection(callDoc, "answerCandidates");
  // const videoInvite = collection(callDoc, "calls");

  setRoomId(callDoc.id);

  pc.onicecandidate = (event) => {
    event.candidate &&
      addDoc(offerCandidates, event.candidate.toJSON());
  };

  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
    roomId: callDoc.id,
    invitedId: userId,
    uid: uid
  };

  await setDoc(callDoc, { offer });

  onSnapshot(callDoc, (snapshot) => {
    const data = snapshot.data();
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(
        data.answer
      );
      pc.setRemoteDescription(answerDescription);
    }
  });

  onSnapshot(answerCandidates, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        const candidate = new RTCIceCandidate(
          change.doc.data()
        );
        pc.addIceCandidate(candidate);
      }
    });
  });
}

export default createCall;