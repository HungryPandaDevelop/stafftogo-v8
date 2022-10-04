const removeRoute = (myMapRef, myRoute) => {
  myMapRef.current.geoObjects.remove(myRoute);
};

export default removeRoute;