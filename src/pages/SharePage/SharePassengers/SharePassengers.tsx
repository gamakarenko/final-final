import AppButton from 'components/ui/AppButton/AppButton';
import AppInput from 'components/ui/AppInput/AppInput';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import useNavigateByCondition from 'hooks/useNavigateByCondition';
import useUpdateOrderInfo from 'hooks/useUpdateOrderInfo';
import { useAppSelector } from 'store/store';
import "./style.css"

export default function SharePassengers() {
  const { navigate } = useNavigateByCondition('/share/transfers', () => true);
  const { order } = useAppSelector(({ newOrder }) => newOrder);
  const { updateOrderInfo } = useUpdateOrderInfo();

  return (
    <div className="share-passengers">
      <PageParagraph>
        Количество взрослых <br />
        Количество детей
      </PageParagraph>

        <div className="share-passengers__form">
        <AppInput
        label="Количество взрослых"
        type="text"
        required
        min={1}
        value={order.adultsAmount}
        onChange={(e) => updateOrderInfo('adultsAmount', e.currentTarget.value)}
      />
      <div className="two-columns">
        <AppInput
          type="text"
          required
          min={0}
          value={order.childrenUnder5}
          onChange={(e) =>
            updateOrderInfo('childrenUnder5', e.currentTarget.value)
          }
        >
          Количество детей <br /> (0-5 лет)
        </AppInput>

        <AppInput
          type="text"
          required
          min={0}
          value={order.childrenAbove5}
          onChange={(e) =>
            updateOrderInfo('childrenAbove5', e.currentTarget.value)
          }
        >
          Количество детей
          <br />
          6-12 лет
        </AppInput>
      </div>
        </div>


      <AppButton className="share-btn" onClick={() => navigate()}>Далее</AppButton>
    </div>
  );
}
