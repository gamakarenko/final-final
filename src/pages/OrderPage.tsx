import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Stepper, Step, Button, SxProps } from '@mui/material';
import { CompleteStep, ConfirmationStep } from '../components/OrderForms/Steps';
import { AltOrderStep, AltPassengerInfoStep } from '../components/OrderForms/AltSteps';
import { useAppDispatch, useAppSelector } from '../store/store';
import { createTransfer } from '../store/slices/userSlice';
import { defaultButton } from '../styles/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTelegram } from '../hooks/useTelegram'
import * as yup from 'yup';

interface OrderPageProps {}

const steps = [
  {
    label: 'Заказать трансфер',
    description: <AltOrderStep />,
  },
  {
    label: 'Заказать трансфер',
    description: <AltPassengerInfoStep />,
  },
  {
    label: 'Заказать трансфер',
    description: <ConfirmationStep />,
  },
  {
    label: 'Заказать трансфер',
    description: <CompleteStep />,
  },
];

const buttonBack: SxProps = {
  width: '343px',
  height: '40px',
  background: '#F2F2F2',
  border: '1px solid #007AFF',
  borderRadius: '8px',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  textTransform: 'none',
  marginBottom: '20px',
};

const OrderPage: React.FC<OrderPageProps> = () => {
  const validationSchema = yup.object({
    order: yup.object({
      carType: yup.string().required('Обязательное поле'),
      end: yup.string().required('Обязательное поле'),
      pickYouUpFromAirPort: yup.boolean().required('Обязательное поле'),
      start: yup.string(),
      transferDate: yup.string().required('Обязательное поле'),
      transferTime: yup.string().required('Обязательное поле'),
      adults: yup.string().required('Обязательное поле'),
      childrenUnder5: yup.string().required('Обязательное поле'),
      childrenAbove5: yup.string().required('Обязательное поле'),
    }),
  });

  const dispatch = useAppDispatch();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const {userId, tg} = useTelegram()

  const methods = useForm<any>({ resolver: yupResolver(validationSchema) });
  const { isValid } = methods.formState;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep !== steps.length - 1 ? prevActiveStep + 1 : prevActiveStep));
    sentPost();
  };
  const [data, setData] = React.useState({});
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const sentPost = () => {
    if (activeStep === 2) {
      dispatch(createTransfer(data, userId));
    }
  };

  const { order } = methods.getValues();
  const {message} = useAppSelector(state => state.user)
  console.log(order);

  return (
    <form className="page-long" onSubmit={methods.handleSubmit((d) => setData(d))}>
      <FormProvider {...methods}>
        <h1 className="page-long__title">Заказать трансфер</h1>
        <div>{steps[activeStep].description}</div>
        <Stepper activeStep={activeStep} connector={null}>
          {steps.map((_, index) => (
            <Step key={index} />
          ))}
        </Stepper>
        {activeStep > 0 && activeStep < maxSteps - 1 ? (
          <div style={{ display: 'flex', gap: '15px' }}>
            <Button sx={buttonBack} onClick={handleBack}>
              Назад
            </Button>
            <Button sx={defaultButton} type="submit" onClick={handleNext}>
              Далее
            </Button>
          </div>
        ) : activeStep === 3 ? (
          <></>
        ) : (
          <Button disabled={!isValid} sx={defaultButton} type="submit" onClick={() => {
            tg.showAlert(message)
            handleNext()}}>
            Далее
          </Button>
        )}
      </FormProvider>
    </form>
  );
};

export default OrderPage;
