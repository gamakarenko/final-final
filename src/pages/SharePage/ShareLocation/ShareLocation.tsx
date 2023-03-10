import AppButton from 'components/ui/AppButton/AppButton';
import PageParagraph from 'components/ui/PageParagraph/PageParagraph';
import useNavigateByCondition from 'hooks/useNavigateByCondition';
import useUpdateOrderInfo from 'hooks/useUpdateOrderInfo';
import { useAppSelector } from 'store/store';
import { IOrder } from 'types/order';
import { startLocationData, endLocationData } from './ShareLocationData';
import RadioFormItem from 'components/RadioFormItem/RadioFormItem';
import './style.css';

export default function ShareLocation() {
  const { updateOrderInfo } = useUpdateOrderInfo();
  const { order } = useAppSelector(({ newOrder }) => newOrder);
  const { navigate } = useNavigateByCondition('/share/passengers', () => true);

  const onChangeHandler = (key: keyof IOrder, value: string) => {
    updateOrderInfo(key, value);
  };

  return (
    <div className="share-location">
      <PageParagraph underlined>Принято! Откуда тебя забрать?</PageParagraph>
      <RadioFormItem
        onChange={(event) =>
          onChangeHandler('startLocation', event.currentTarget.value)
        }
        radiItems={startLocationData}
      />

      {order.startLocation && (
        <>
          <PageParagraph className="share__title">
            Пожалуйста, укажи пункт назначения ↓
          </PageParagraph>
          <RadioFormItem
            onChange={(event) =>
              onChangeHandler('endLocation', event.currentTarget.value)
            }
            radiItems={endLocationData}
          />
        </>
      )}

      <AppButton className="share-btn" onClick={() => navigate()}>
        Далее
      </AppButton>
    </div>
  );
}
