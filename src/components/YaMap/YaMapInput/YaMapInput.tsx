import { ChangeEventHandler, FC, useEffect, useRef, useState } from 'react';

import AppIconBtn from 'components/ui/AppIconBtn/AppIconBtn';

import { getDebounce } from 'utils/debounce';
import { getId } from './YaMapInput.utils';
import { ISuggest } from '../YaMap.types';

import { StyledYaMapInput } from './YaMapInput.styles';
import { Backdrop, backdropClasses } from '@mui/material';

const yaMap = (window as any).ymaps;
const debounce = getDebounce();

interface YaMapInputProps {
  isOpen: boolean;
  caption: string;
  onClose: () => void;
  location: string;
  setLocation: (location: string) => void;
  setGeo: (location: string, scale?: number) => void;
}

const YaMapInput: FC<YaMapInputProps> = ({
  isOpen,
  caption,
  onClose,
  location,
  setLocation,
  setGeo,
}) => {
  const [suggests, setSuggests] = useState<ISuggest[]>([]);
  const [newLocation, setNewLocation] = useState(location);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (newLocation) {
      debounce(() => getSuggests(newLocation), 300);
    }
  }, [newLocation]);

  useEffect(() => {
    if (isOpen) {
      setNewLocation(location);
    }
  }, [isOpen]);

  const getSuggests = async (location: string) => {
    const suggests: ISuggest[] = await yaMap.suggest(location, { results: 10 });
    setSuggests(suggests);
  };

  const handleChangeLocation: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setNewLocation(e.target.value);
  };

  const handleSuggestClick = (location: string) => {
    setNewLocation(location);
    inputRef.current?.focus();
  };

  const handleBtnDoneClick = () => {
    setLocation(newLocation);
    setGeo(newLocation, 17);
    onClose();
  };

  return (
    <StyledYaMapInput
      className="ya-map-input"
      open={isOpen}
      onClose={onClose}
      slotProps={{ backdrop: {className: 'ya-map-input__backdrop'} }}
    >
      <div className="ya-map-input__section">
        <div
          className="ya-map-input__heading-box"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <AppIconBtn
            icon="close"
            className="ya-map-input__close-btn"
            fill="#fff"
            onClick={() => onClose()}
            size={22}
            withSeparator="right-lined"
          />
          <p className="ya-map-input__heading">{caption}</p>
        </div>
        <div className="ya-map-input__content">
          <div className="ya-map-input__input-box">
            <textarea
              className="ya-map-input__input"
              value={newLocation}
              onChange={handleChangeLocation}
              ref={inputRef}
              placeholder={`Начните вводить ${caption.toLowerCase()}...`}
              autoComplete="off"
              autoFocus
            />

            <AppIconBtn
              icon="arrow-right"
              withSeparator="left-lined"
              className="ya-map-input__btn-done"
              size={32}
              onClick={handleBtnDoneClick}
            />
          </div>

          {suggests.map((suggest) => (
            <button
              key={getId()}
              className="ya-map-input__suggest"
              onClick={() => {
                handleSuggestClick(suggest.value);
              }}
            >
              {suggest.value}
            </button>
          ))}
        </div>
      </div>
    </StyledYaMapInput>
  );
};

export default YaMapInput;
