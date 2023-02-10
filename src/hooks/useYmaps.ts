import { useState } from 'react';

//@ts-ignore
const ymaps = window?.ymaps;

export function useYmaps() {
  const [location, setLocation] = useState('');

  function onLoad(ymaps: any) {
    var suggestView = new ymaps.SuggestView('suggest', { results: 5 });
  }

  function init(id: string) {
    var myPlacemark: any;

    var myMap = new ymaps.Map(id, {
      center: [36.887763, 30.702574],
      zoom: 7,
    });

    ymaps.geolocation
      .get({
        provider: 'auto',
        mapStateAutoApply: true,
        autoReverseGeocode: true,
      })
      .then(function (result: any) {
        myMap.geoObjects.add(result.geoObjects);
      });

    myMap.events.add('click', function (e: any) {
      var coords = e.get('coords');

      if (myPlacemark) {
        myPlacemark.geometry.setCoordinates(coords);
      } else {
        myPlacemark = createPlacemark(coords);
        myMap.geoObjects.add(myPlacemark);

        myPlacemark.events.add('dragend', function () {
          getAddress(myPlacemark.geometry.getCoordinates());
        });
      }
      getAddress(coords);
    });

    function createPlacemark(coords: any) {
      return new ymaps.Placemark(
        coords,
        {
          iconCaption: 'поиск...',
        },
        {
          preset: 'islands#blueDotIconWithCaption',
          draggable: true,
        },
      );
    }

    function getAddress(coords: any) {
      myPlacemark.properties.set('iconCaption', 'поиск...');
      ymaps.geocode(coords).then(function (res: any) {
        var firstGeoObject = res.geoObjects.get(0);

        myPlacemark.properties.set({
          iconCaption: [
            firstGeoObject.getLocalities().length
              ? firstGeoObject.getLocalities()
              : firstGeoObject.getAdministrativeAreas(),
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
          ]
            .filter(Boolean)
            .join(', '),
          balloonContent: firstGeoObject.getAddressLine(),
        });
        setLocation(firstGeoObject.getAddressLine());
      });
    }
  }

  return {
    ymaps,
    onLoad,
    init,
    location,
    setLocation,
  };
}
