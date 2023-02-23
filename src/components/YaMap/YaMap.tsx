import AppButton from 'components/ui/AppButton/AppButton';
import AppTextArea from 'components/ui/AppTextArea/AppTextArea';
import {
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { debounce } from 'utils/debounce';

import { StyledYaMap } from './YaMap.styled';

export interface YaMapProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  location: string;
  setLocation: (data: string) => void;
  heading: string;
}

const yaMap = (window as any).ymaps;

const createPlaceMark = (coords: any) => {
  return new yaMap.Placemark(
    coords,
    {
      iconCaption: '',
    },
    {
      preset: 'islands#blueDotIconWithCaption',
      draggable: true,
    },
  );
};

const YaMap: FC<YaMapProps> = ({ location, setLocation, heading, ...rest }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const mapId = useId();
  const suggestId = useId();

  const mapRef = useRef();
  const placeMarkRef = useRef();

  useEffect(() => {
    if (!location) {
      return;
    }

    const setGeo = async () => {
      const suggests: any = await yaMap.suggest(location);

      yaMap.geocode(suggests[0].value).then((res: any) => {
        const coords = res.geoObjects.get(0).geometry.getCoordinates();

        (mapRef.current as any).setCenter(coords, 12);
        let placeMark = (mapRef.current as any).geoObjects.get(0);

        if (placeMark) {
          placeMark.geometry.setCoordinates(coords);
        } else {
          placeMark = createPlaceMark(coords);
          (mapRef.current as any).geoObjects.add(placeMark);
        }
      });
    };

    debounce(() => setGeo(), 1000);
  }, [location]);

  const onLoad = (ymaps: any) => {
    var suggestView = new ymaps.SuggestView(suggestId, { results: 5 });
    suggestView.events.add('select', (e: any) => {
      //Задаем локацию из выпадающей подсказки
      setLocation(e.originalEvent.item.displayName);
    });
  };

  const init = (id: string) => {
    mapRef.current = new yaMap.Map(id, {
      center: [36.887763, 30.702574],
      zoom: 7,

      options: { autoFitToViewport: 'always' },
    });

    const map = mapRef.current as any;
    let placeMark = placeMarkRef.current as any;

    map.events.add('click', (e: any) => {
      const coords = e.get('coords');

      if (placeMark) {
        placeMark.geometry.setCoordinates(coords);
      } else {
        placeMark = createPlaceMark(coords);
        map.geoObjects.add(placeMark);

        placeMark.events.add('dragend', function () {
          getAddress(placeMark.geometry.getCoordinates());
        });
      }

      getAddress(coords);
    });

    const getAddress = (coords: any) => {
      yaMap.geocode(coords).then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0);
        //Задаем локацию кликом по карте
        setLocation(firstGeoObject.getAddressLine());
      });
    };
  };

  useEffect(() => {
    // yaMap.ready(() => onLoad(yaMap));
    yaMap.ready(() => init(mapId));
  }, []);

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
