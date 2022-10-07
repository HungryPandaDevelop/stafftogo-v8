import { useState, useEffect, useRef } from 'react';

import addPlacemark from 'pages/goMap/js/addPlacemark';
// import addRoute from 'pages/goMap/js/addRoute';
import removePlacemark from 'pages/goMap/js/removePlacemark';
import getMyPosition from 'pages/goMap/js/getMyPosition';

import ClearYaMap from 'pages/goMap/parts/ClearYaMap';
import CardsPopup from 'pages/goMap/parts/CardsPopup';
import RoutePopup from 'pages/goMap/parts/RoutePopup';

import filterMain from 'components/filterMain/filterMain';

import { getListing } from 'store/asyncActions/getListing';
import { connect } from 'react-redux';


const MapYandex = ({ listingSearch, listingType }) => {

  // const myMap = useRef(null);

  const [myMap, setMyMap] = useState(null);
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
      myMap.geocode(coords).then((res) => {
        setCoords(res.geoObjects.get(0).getAddressLine())
      });
    };

    if (myMap) {

      getListing(listingType).then(res => {

        let data = filterMain(listingSearch, res);

        getMyPosition().then((pos) => {
          setMyPosition(pos);
          getAddress(pos, setMyPositionText);

          addPlacemark(myMap, myMapRef, pos, 'myMarker');

        }).catch((err) => {
          console.log('Your browser not suported goelocation', err);
        });


        const allPlacemark = data.map((item) => {
          if (item.data.coords) {
            const coords = item.data.coords.split('--');
            const ltd = Number(coords[1]);
            const lng = Number(coords[2]);
            return addPlacemark(myMap, myMapRef, [ltd, lng], '', item.id);
          }
        });

        setListings(allPlacemark);



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

  }, [myMap, listingType, listingSearch]);


  return (
    <>
      <ClearYaMap myMapRef={myMapRef} setMyMap={setMyMap} />
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
    listingSearch: state.listingSearchReducer,
    listingType: state.listingTypeReducer
  }
}

export default connect(mapStateToProps)(MapYandex);