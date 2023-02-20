import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

const ChangesSaved = () => {
  const navigate = useNavigate();

  return (
    <>
      <PageParagraph>
        Спасибо! Изменения приняты :) Ассистент свяжется с&nbsp;тобой
        за&nbsp;24&nbsp;поездки, чтобы подтвердить информацию.
      </PageParagraph>

      <AppButton
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        На главную
      </AppButton>
    </>
  );
};

export default ChangesSaved;
