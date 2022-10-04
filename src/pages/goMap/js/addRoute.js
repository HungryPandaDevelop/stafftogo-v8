const addRoute = (myMap, myMapRef, setMyRoute, from, to, typeRoute) => {
  const multiRoute = new myMap.multiRouter.MultiRoute(
    {
      referencePoints: [from, to].reverse(),
      params: {
        routingMode: typeRoute,
      }
    },
    { boundsAutoApply: true }
  );
  setMyRoute(multiRoute);

  myMapRef.current.geoObjects.add(multiRoute);
};

export default addRoute;