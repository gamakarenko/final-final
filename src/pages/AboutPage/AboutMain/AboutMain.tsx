import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';

import { StyledAboutMain } from './AboutMain.styles';

const AboutMain = () => {
  const navigate = useNavigate();

  return (
    <StyledAboutMain>
      <AppButton
        onClick={() =>
          navigate('info', {
            state: { stayInSectionWhenClickBack: true },
          })
        }
      >
        Больше о нас
      </AppButton>
      <AppButton
        onClick={() =>
          navigate('review', {
            state: { stayInSectionWhenClickBack: true },
          })
        }
      >
        Оставить отзыв
      </AppButton>
    </StyledAboutMain>
  );
};

export default AboutMain;
