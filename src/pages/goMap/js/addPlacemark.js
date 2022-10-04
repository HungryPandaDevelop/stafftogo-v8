import userMarker from 'front-end/images/icons/marker.svg'

const addPlacemark = (myMap, myMapRef, coords, setOptions, itemId) => {
  //  console.log(itemId);
  let myMarkerOptions = {
    iconLayout: 'default#image',
    iconImageHref: userMarker,
    iconImageSize: [30, 42],
  }
  let itemMarkerOptions = {
    preset: "islands#yellowStretchyIcon",
  }
  let setMarkerStyle = setOptions === 'myMarker' ? myMarkerOptions : itemMarkerOptions;
  // console.log(setMarkerStyle);

  
  const placemark = new myMap.current.Placemark(
    coords, 
    {
      itemId: itemId
    
    }
    , {
      ...setMarkerStyle,
        // Отключаем кнопку закрытия балуна.
        balloonCloseButton: false,
    });

    myMapRef.current.geoObjects.add(placemark);
    return placemark;
  
};

export default addPlacemark;