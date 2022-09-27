import { toast } from 'react-toastify';

import {
  collection,
  query,
  onSnapshot,
  serverTimestamp,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  where,
  setDoc,
  orderBy
} from 'firebase/firestore';

import { db } from 'firebase.config';




const createRoom = async (ownId, hisId, uid, invitedId,) => {


  //if(querySnap.docs.length === 0){
    try {
      const sendData = {
        interlocutors: [uid, invitedId],
        cardsConnect: [ownId, hisId],
        timestamp: serverTimestamp(),
        ownId: ownId,
        hisId: hisId,
        masterId: uid,
        invitedId: invitedId,
        invite: 'view',
        messages:{}
      }
      
      await addDoc(collection(db, 'message'), sendData);
    
    
      toast.success('Данные обновлены')
    } catch (error) {
        console.error(error);
        toast.error(error)
    }

}

const sendMessage = async (roomId, text, randomId,  uid) => {
  // console.log('messages', roomId, text, randomId,  uid)

  // const docSnap = await getDoc(doc(db, 'message', chatId));
  const getDocRoomInfo =  await getDoc(doc(db, 'message', roomId));
  const getRoomInfo = getDocRoomInfo.data();


  try {
    let setData
    if(getRoomInfo){
      setData = { 
        ...getRoomInfo,
          messages:{
            ...getRoomInfo.messages,
            [randomId]:{
              text: text,
              uid: uid,
              timestamp: serverTimestamp(),
            }
          }
      };
    }
    else{
      setData = { 
        getRoomInfo,
          messages:{
            [randomId]:{
              text: text,
              uid: uid,
              timestamp: serverTimestamp(),
            }
          }
      };
    }
    // console.log('sendMessage', 'setData')
    await setDoc(doc(db, 'message', roomId), setData);

      toast.success('Данные обновлены');
      
  } catch (error) {
      console.error(error);
      toast.error(error)
  }
}


const getMyRoomMessages = (chatId, callback) => {
  // console.log('getMyRoomMessages',chatId)
  const docRef =  doc(db, 'message', chatId);
  let a = 0;
  const unsubscribe = onSnapshot(
    query(docRef),
    (doc)=>{
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      if(source === "Server"){
        // callback(doc.data());
        console.log('in s')
        callback(a++)
      }
    },
  );
  //unsubscribe();
  // const docSnap = await getDoc(doc(db, 'message', chatId));

  // return docSnap.data().messages;
}





const getMyRooms = async (uid) =>{

  const listRef = collection(db, 'message'); 

  const q = query(
    listRef,
    where("interlocutors", "array-contains", uid),

  );

  const querySnap = await getDocs(q);

  const list = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
  }));

  // callback(list);
  return list;
}


export {getMyRoomMessages, sendMessage, createRoom, getMyRooms};




