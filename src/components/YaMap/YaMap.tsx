import { FC, useEffect, useState } from 'react';

import { StyledYaMap } from './YaMap.styled';

export interface YaMapProps {
  isVisible: boolean;
  setLocation: (value: any) => void;
  location: string;
}

const YaMap: FC<YaMapProps> = ({ isVisible, location, setLocation }) => {
  const [yaMap, setYaMap] = useState<any>();
  const [isInit, setIsInit] = useState(false);

  useEffect(() => {
    if ((window as any).ymaps) {
      setYaMap((window as any).ymaps);
    }
  }, []);

  useEffect(() => {
    
  }, [location]);

  function onLoad(ymaps: any) {
    var suggestView = new ymaps.SuggestView('suggest', { results: 5 });
    suggestView.events.add('select', (e: any) => {
      //Задаем локацию из выпадающей подсказки
      setLocation(e.originalEvent.item.displayName);      
    });
  }

  function init(id: string) {
    var myPlacemark: any;

    var myMap = new yaMap.Map(id, {
      center: [36.887763, 30.702574],
      zoom: 7,

      options: { autoFitToViewport: 'always' },
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
      return new yaMap.Placemark(
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
      yaMap.geocode(coords).then(function (res: any) {
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

        //Задаем локацию кликом по карте
        setLocation(firstGeoObject.getAddressLine());
      });
    }
  }

  useEffect(() => {
    if (yaMap && !isInit) {
      yaMap.ready(() => onLoad(yaMap));
      yaMap.ready(() => init('map'));

      setIsInit(true);
    }
  }, [yaMap]);

  return yaMap ? <StyledYaMap id="map" isVisible={isVisible} /> : null;
};

export default YaMap;
