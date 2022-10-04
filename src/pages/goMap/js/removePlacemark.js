const removePlacemark = (myMapRef, listings) => {
  listings.forEach(item=>{

    myMapRef.current.geoObjects.remove(item);    
  })
};

export default removePlacemark;