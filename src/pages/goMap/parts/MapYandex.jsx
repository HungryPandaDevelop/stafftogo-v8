import { useState, useEffect, useRef } from 'react';

import addPlacemark from 'pages/goMap/js/addPlacemark';
// import addRoute from 'pages/goMap/js/addRoute';
// import removeRoute from 'pages/goMap/js/removeRoute';
import removePlacemark from 'pages/goMap/js/removePlacemark';
import getMyPosition from 'pages/goMap/js/getMyPosition';

import ClearYaMap from 'pages/goMap/parts/ClearYaMap';
import CardsPopup from 'pages/goMap/parts/CardsPopup';
import RoutePopup from 'pages/goMap/parts/RoutePopup';


import { getListing } from 'store/asyncActions/getListing';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const MapYandex = ({ listingType }) => {

  const [myMap, setMyMap] = useState(null);
  // const [myRoute, setMyRoute] = useState(null);
  const myMapRef = useRef(null);

  const [listings, setListings] = useState(null);
  const [currentCardId, setCurrentCardId] = useState(null);

  const [myPosition, setMyPosition] = useState(null);
  const [choiseMarkerPosition, setChoiseMarkerPosition] = useState(null);
  useEffect(() => {

    listings && removePlacemark(myMapRef, listings);



    getMyPosition().then((pos) => {
      //console.log('pos my', pos)

      setMyPosition(pos);

    }).catch((err) => {
      console.log('Your browser not suported goelocation', err);
    });

    const getAddres = (coords) => {
      // myMapRef.geolocation
      //   .geocode.get()
    }

    if (myMap) {
      getListing(listingType).then(res => {

        const allPlacemark = res.map((item) => {
          if (item.data.coords) {
            const coords = item.data.coords.split('--');
            const ltd = Number(coords[1]);
            const lng = Number(coords[2]);
            return addPlacemark(myMap, myMapRef, [ltd, lng], '', item.id);
          }
        });

        setListings(allPlacemark);

        getMyPosition().then((pos) => {
          //console.log('pos my', pos)

          addPlacemark(myMap, myMapRef, pos, 'myMarker');
          setMyPosition(pos);

          myMapRef.current.geoObjects.events.add('click', (e) => {
            // console.log('itemId', e.get('target').properties.get('itemId'))
            // console.log('getCoordinates', e.get('target').geometry.getCoordinates())

            setCurrentCardId(e.get('target').properties.get('itemId'));

            setChoiseMarkerPosition(e.get('target').geometry.getCoordinates());


            getAddres(e.get('target').geometry.getCoordinates())
            // addRoute(myMap, myMapRef, setMyRoute, pos, pointTo);
          });

        }).catch((err) => {
          console.log('Your browser not suported goelocation', err);
        });

      });




    }




  }, [myMap, listingType]);


  return (
    <>

      <ClearYaMap myMapRef={myMapRef} setMyMap={setMyMap} />
      <CardsPopup currentCardId={currentCardId} listingType={listingType} />
      <RoutePopup
        currentCardId={currentCardId}
        myMap={myMap}
        myMapRef={myMapRef}
        myPosition={myPosition}
        choiseMarkerPosition={choiseMarkerPosition}
      />
      {/* <button onClick={() => { addPlacemark(myMap, myMapRef) }}>Добавить метку</button> */}
      {/* <button onClick={() => { addRoute(myMap, myMapRef, setMyRoute) }}>Маршрут</button> */}
      {/* <button onClick={() => { removeRoute(myMapRef, myRoute) }}>Удалить Маршрут</button> */}
      {/* <button onClick={() => { removePlacemark(myMapRef, listings) }}>Удалить метки</button> */}
    </>
  )
}


const mapStateToProps = (state) => {

  return {
    idShow: state.popupReducer.idShow,
    listingType: state.listingTypeReducer
  }
}

export default connect(mapStateToProps, { ActionFn })(MapYandex);