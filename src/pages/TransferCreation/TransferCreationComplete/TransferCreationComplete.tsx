import { useNavigate } from 'react-router-dom';

import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';

import { StyledTransferCreationComplete } from './TransferCreationComplete.styles';

const TransferCreationComplete = () => {
  const navigate = useNavigate();

  return (
    <StyledTransferCreationComplete>
      <PageParagraph>
        Спасибо! Ваша заявка на&nbsp;трансфер принята. Ассистент свяжется
        с&nbsp;вами в&nbsp;течение за&nbsp;24&nbsp;ч.&nbsp;до&nbsp;отправления
        для подтверждения бронирования.
      </PageParagraph>
      <PageParagraph>
        Мы&nbsp;напомним тебе о&nbsp;поездке за&nbsp;12&nbsp;часов
        до&nbsp;отправления :)
      </PageParagraph>
      <PageParagraph>
        Теперь твоя бронь доступна в&nbsp;разделе: Мои поездки. Там&nbsp;же
        ты&nbsp;сможешь её&nbsp;отменить или изменить данные.
      </PageParagraph>

      <AppButton
        className="transfer-creation-complete__btn"
        isFilled={false}
        onClick={() => navigate('/transfers')}
      >
        Мои поездки
      </AppButton>
      <AppButton
        className="transfer-creation-complete__btn"
        onClick={() => navigate('/')}
      >
        Завершить
      </AppButton>
    </StyledTransferCreationComplete>
  );
};

export default TransferCreationComplete;
