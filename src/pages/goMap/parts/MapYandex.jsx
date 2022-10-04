import { useState, useEffect, useRef } from 'react';

import addPlacemark from 'pages/goMap/js/addPlacemark';
// import addRoute from 'pages/goMap/js/addRoute';
import removeRoute from 'pages/goMap/js/removeRoute';
import removePlacemark from 'pages/goMap/js/removePlacemark';
import getMyPosition from 'pages/goMap/js/getMyPosition';

import ClearYaMap from 'pages/goMap/parts/ClearYaMap';
import CardsPopup from 'pages/goMap/parts/CardsPopup';
import RoutePopup from 'pages/goMap/parts/RoutePopup';


import { getListing } from 'store/asyncActions/getListing';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

const MapYandex = ({ listingType }) => {

  const myMap = useRef(null);
  // const [myMap, setMyMap] = useState(null);
  const [myRoute, setMyRoute] = useState(null);
  const [routeboxState, setRouteboxState] = useState(false);

  const myMapRef = useRef(null);

  const [listings, setListings] = useState(null);
  const [currentCardId, setCurrentCardId] = useState(null);

  const [myPosition, setMyPosition] = useState(null);
  const [choiseMarkerPosition, setChoiseMarkerPosition] = useState(null);

  const [myPositionText, setMyPositionText] = useState('');
  const [markerPositionText, setMarkerPositionText] = useState('');

  useEffect(() => {

    listings && removePlacemark(myMapRef, listings);

    const getAddress = (coords, setCoords) => {

      myMap.current.geocode(coords).then((res) => {
        setCoords(res.geoObjects.get(0).getAddressLine())
      });
    };

    if (myMap) {

      getListing(listingType).then(res => {

        getMyPosition().then((pos) => {
          setMyPosition(pos);
          getAddress(pos, setMyPositionText);


        }).catch((err) => {
          console.log('Your browser not suported goelocation', err);
        });


        const allPlacemark = res.map((item) => {
          if (item.data.coords) {
            const coords = item.data.coords.split('--');
            const ltd = Number(coords[1]);
            const lng = Number(coords[2]);
            return addPlacemark(myMap, myMapRef, [ltd, lng], '', item.id);
          }
        });

        setListings(allPlacemark);

        addPlacemark(myMap, myMapRef, myPosition, 'myMarker');

        myMapRef.current.geoObjects.events.add('click', (e) => {
          // console.log('itemId', e.get('target').properties.get('itemId'))
          // console.log('getCoordinates', e.get('target').geometry.getCoordinates())
          setCurrentCardId(e.get('target').properties.get('itemId'));
          setChoiseMarkerPosition(e.get('target').geometry.getCoordinates());



          getAddress(e.get('target').geometry.getCoordinates(), setMarkerPositionText);
          // addRoute(myMap, myMapRef, setMyRoute, pos, pointTo);
        });

      });

    };

  }, [myMap, listingType]);


  return (
    <>
      {console.log('render route', myRoute)}
      <ClearYaMap myMapRef={myMapRef} myMap={myMap} />
      <CardsPopup
        currentCardId={currentCardId}
        listingType={listingType}
        myMapRef={myMapRef}
        myRoute={myRoute}
        setRouteboxState={setRouteboxState}
        setCurrentCardId={setCurrentCardId}
      />
      <RoutePopup
        currentCardId={currentCardId}
        myMap={myMap}
        myMapRef={myMapRef}
        myRoute={myRoute}
        setMyRoute={setMyRoute}
        myPosition={myPosition}
        choiseMarkerPosition={choiseMarkerPosition}
        myPositionText={myPositionText}
        markerPositionText={markerPositionText}
        routeboxState={routeboxState}
        setRouteboxState={setRouteboxState}
      />

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