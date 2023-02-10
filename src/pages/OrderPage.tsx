import { FC, useState } from 'react';

import { Stepper, Step, Button } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../store/store';
import { createTransfer } from '../store/slices/userSlice';
import { useTelegram } from '../hooks/useTelegram';

import { CompleteStep, ConfirmationStep } from '../components/OrderForms/Steps';
import { AltOrderStep, AltPassengerInfoStep } from '../components/OrderForms/AltSteps';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { buttonBack2, defaultButton } from '../styles/styles';

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

interface OrderPageProps {}

const OrderPage: FC<OrderPageProps> = () => {
  const dispatch = useAppDispatch();

  const [data, setData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const { userId, tg } = useTelegram();

  const methods = useForm<any>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const { isValid, errors } = methods.formState;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep !== steps.length - 1 ? prevActiveStep + 1 : prevActiveStep));
    sentPost();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const sentPost = () => {
    if (activeStep === 2) {
      dispatch(createTransfer(data, userId));
      tg.showAlert(message);
    }
  };

  const { order } = methods.getValues();
  const { message } = useAppSelector((state) => state.user);

  return (
    <form className="page-long" onSubmit={methods.handleSubmit((d) => setData(d))}>
      <FormProvider {...methods}>
        <h1 className="page-long__title">Заказать трансфер</h1>
        {/* Наш текуший степ */}
        <div>{steps[activeStep].description}</div>

        {/* <Stepper activeStep={activeStep} connector={null}>
          {steps.map((_, index) => (
            <Step key={index} />
          ))}
        </Stepper> */}

        {activeStep > 0 && activeStep < maxSteps - 1 ? (
          <div style={{ display: 'flex', gap: '15px' }}>
            <Button sx={buttonBack2} onClick={handleBack}>
              Назад
            </Button>
            <Button sx={defaultButton} type="submit" onClick={handleNext}>
              Далее
            </Button>
          </div>
        ) : activeStep === 3 ? (
          <></>
        ) : (
          <Button disabled={!isValid} sx={defaultButton} type="submit" onClick={handleNext}>
            Далее
          </Button>
        )}

      </FormProvider>
    </form>
  );
};

export default OrderPage;
