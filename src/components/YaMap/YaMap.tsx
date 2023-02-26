import {
  FC,
  TextareaHTMLAttributes,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';

import AppButton from 'components/ui/AppButton/AppButton';
import YaMapInput from './YaMapInput/YaMapInput';

import placeMarkSvg from './placemark.svg';
import { IMapControl } from './YaMap.types';

import { StyledYaMap } from './YaMap.styled';
import AppIconBtn from 'components/ui/AppIconBtn/AppIconBtn';

export interface YaMapProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  location: string;
  setLocation: (data: string) => void;
  heading: string;
}

const yaMap = (window as any).ymaps;

const YaMap: FC<YaMapProps> = ({ location, setLocation, heading, ...rest }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isAddressInputOpen, setIsAddressInputOpen] = useState(false);

  const mapId = useId();

  const mapRef = useRef();

  const setGeo = async (location: string, scale?: number) => {
    yaMap.geocode(location).then((res: any) => {
      const coords = res.geoObjects.get(0).geometry.getCoordinates();
      if (scale) {
        (mapRef.current as any).setCenter(coords, scale);
      } else {
        (mapRef.current as any).setCenter(coords);
      }
      let placeMark = (mapRef.current as any).geoObjects.get(0);

      placeMark.geometry.setCoordinates(coords);
    });
  };

  const init = (id: string) => {
    mapRef.current = new yaMap.Map(id, {
      center: [36.887763, 30.702574],
      zoom: 7,

      options: { autoFitToViewport: 'always' },
    });

    const map = mapRef.current as any;

    (
      [
        'geolocationControl',
        'searchControl',
        'trafficControl',
        'typeSelector',
        'fullscreenControl',
        'rulerControl',
        'zoomControl',
      ] as IMapControl[]
    ).forEach((control) => map.controls.remove(control));

    const placeMark = new yaMap.Placemark(
      [],
      {},
      {
        iconLayout: 'default#image',
        iconImageHref: placeMarkSvg,
        iconImageSize: [24, 24],
        iconImageOffset: [-12, -24],
      },
    );
    map.geoObjects.add(placeMark);

    const centerPlaceMark = () => {
      var current_state = map.action.getCurrentState();
      var geoCenter = map.options
        .get('projection')
        .fromGlobalPixels(current_state.globalPixelCenter, current_state.zoom);
      placeMark.geometry.setCoordinates(geoCenter);
    };

    centerPlaceMark();

    map.events.add('actiontick', (e: any) => {
      centerPlaceMark();
    });

    map.events.add('actionend', () => {
      centerPlaceMark();

      yaMap.geocode(placeMark.geometry.getCoordinates()).then((res: any) => {
        const firstGeoObject = res.geoObjects.get(0);

        setLocation(firstGeoObject.getAddressLine());
      });
    });
  };

  useEffect(() => {
    yaMap.ready(() => init(mapId));

    if (location) {
      setGeo(location, 17);
    }
  }, []);

  return (
    <StyledYaMap isCardVisible={isCardVisible} className="ya-map">
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

      <div
        className="ya-map__address-select-box"
        onClick={() => setIsAddressInputOpen(true)}
      >
        <textarea
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="ya-map__text-area"
          placeholder="Ввести адрес..."
          aria-hidden="true"
          tabIndex={-1}
          {...rest}
        />
        <AppIconBtn
          className="ya-map__btn-select"
          icon="arrow-right"
          withSeparator="left-lined"
          aria-label="Выбрать адрес."
        />
      </div>

      <YaMapInput
        setGeo={setGeo}
        isOpen={isAddressInputOpen}
        onClose={() => setIsAddressInputOpen(false)}
        location={location}
        setLocation={setLocation}
      />
    </StyledYaMap>
  );
};

export default YaMap;
