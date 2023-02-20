import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';

import { StyledSelectChangeOptionsPage } from './SelectChangeOptionsPage.styles';

const SelectChangeOptionsPage = () => {
  const navigate = useNavigate();

  return (
    <StyledSelectChangeOptionsPage>
      <AppButton
        isFilled={false}
        onClick={() =>
          navigate('main-info', { state: { stayInSectionWhenClickBack: true } })
        }
      >
        Общие сведения
      </AppButton>
      <AppButton
        isFilled={false}
        onClick={() =>
          navigate('passengers', {
            state: { stayInSectionWhenClickBack: true },
          })
        }
      >
        Данные пассажиров
      </AppButton>
    </StyledSelectChangeOptionsPage>
  );
};

export default SelectChangeOptionsPage;
