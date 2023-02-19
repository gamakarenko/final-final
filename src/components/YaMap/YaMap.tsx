import AppButton from 'components/ui/AppButton/AppButton';
import AppTextArea from 'components/ui/AppTextArea/AppTextArea';
import { FC, TextareaHTMLAttributes, useEffect, useId, useState } from 'react';

import { StyledYaMap } from './YaMap.styled';

export interface YaMapProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  location: string;
  setLocation: (data: string) => void;
  heading: string;
}

const YaMap: FC<YaMapProps> = ({ location, setLocation, heading, ...rest }) => {
  const [yaMap, setYaMap] = useState<any>();
  const [isInit, setIsInit] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const mapId = useId();
  const suggestId = useId();

  useEffect(() => {
    if ((window as any).ymaps) {
      setYaMap((window as any).ymaps);
    }
  }, []);

  useEffect(() => {}, [location]);

  function onLoad(ymaps: any) {
    var suggestView = new ymaps.SuggestView(suggestId, { results: 5 });
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
      yaMap.ready(() => init(mapId));

      setIsInit(true);
    }
  }, [yaMap]);

  return (
    <StyledYaMap isCardVisible={isCardVisible} className={`ya-map`}>
      <div className="ya-map__address-label">
        <p>{heading}</p>
        <AppButton
          className="ya-map__card-btn"
          isFilled={false}
          isUppercase
          onClick={() => setIsCardVisible((prev) => !prev)}
        >
          {isCardVisible ? 'Скрыть карту' : 'Выбрать на карте'}
        </AppButton>
      </div>

      <div className="ya-map__map" id={mapId} />

      <AppTextArea
        id={suggestId}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="ya-map__text-area"
        {...rest}
      />
    </StyledYaMap>
  );
};

export default YaMap;
