import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit,
  startAfter
} from 'firebase/firestore';

import { db } from 'firebase.config';


export const getListing = async (baseName, uid, type) => {

  // console.log('in', baseName, uid)

  const listingsRef = collection(db, baseName);
  
  let q;

  if(uid && type==='users'){

    q = query(
      listingsRef,
      where('userRef', '==', uid),
      orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }else if(type==='like'){
    q = query(
      listingsRef,
      where("idLike", "array-contains", uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else if(type==='invite'){
    q = query(
      listingsRef,
      where("masterId", "==", uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else if(type==='response'){
    q = query(
      listingsRef,
      where('invitedId', '==', uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else if(type==='rooms'){
    q = query(
      listingsRef,
      where('interlocutors', 'array-contains', uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else if(type==='videolist'){
    q = query(
      listingsRef,
      where('offer.invitedId', '==', uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else if(type==='videolist-my'){
    q = query(
      listingsRef,
      where('offer.uid', '==', uid),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else{
    q = query(
      listingsRef,
      orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      id: doc.id,
      data: doc.data()
    });
  });

  return getData;

}



export const onDeleteCards = async (listings, listingId, name) => {
  if (window.confirm('Delete ?')) {
    await deleteDoc(doc(db, name, listingId))
    return  listings.filter((listing) => listing.id !== listingId)
  }
  else{
    return listings;
  }
}

export const onDeleteMessage = async(id)=>{

  const q = query(
    collection(db, 'message'),
    where('cardsConnect', 'array-contains', id),
  )
  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      id: doc.id,
      data: doc.data()
    });
  });

  getData.map(item=>{
    deleteDoc(doc(db, 'message', item.id));
  });

}



// export const onEdit = async (listingId) => {
//   const navigate = useNavigate();

//   navigate(`/cabinet/vacancies-edit/${listingId}`)
// }


