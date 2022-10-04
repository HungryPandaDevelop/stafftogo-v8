import { YMaps, Map, ZoomControl } from 'react-yandex-maps';

const ClearYaMap = ({ myMap, myMapRef }) => {

  return (
    <>
      <YMaps
        query={{ apikey: 'fdb17d90-1d93-4d15-aa02-45c372d5e0f8' }}

      >
        <Map
          id="map"
          width="100%"
          height="80%"
          style={{ top: '90px' }}
          defaultState={
            {
              center: [55.75, 37.57],
              zoom: 9
            }
          }
          modules={["multiRouter.MultiRoute", "Placemark", "geocode"]}
          onLoad={(y) => {
            myMap.current = y;
          }}
          instanceRef={myMapRef}
        >

          <ZoomControl />
        </Map>
      </YMaps>
    </>
  )
}

export default ClearYaMap
