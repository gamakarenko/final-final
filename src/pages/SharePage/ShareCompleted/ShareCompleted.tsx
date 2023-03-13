import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import useNavigateByCondition from 'hooks/useNavigateByCondition';

export default function ShareCompleted() {
    const { navigate } = useNavigateByCondition('/share/result', () => true);

  return (
    <div className="share-completed">
      <PageParagraph>
        Спасибо! Ваша заявка на трансфер принята. <br />
        Ждем вас 03.12 в 21:00 по адресу: <br /> Анталия, улица *********.
      </PageParagraph>

      <AppButton className="share-btn" onClick={() => navigate()}>
        Далее
      </AppButton>
    </div>
  );
}
