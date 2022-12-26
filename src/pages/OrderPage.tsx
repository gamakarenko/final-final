import * as React from 'react';
import { FormProvider, useForm } from "react-hook-form";
import { Stepper, Step, Button, SxProps } from '@mui/material';
import { CompleteStep, ConfirmationStep} from '../components/OrderForms/Steps';
import { useNavigate } from 'react-router-dom';
import { AltOrderStep, AltPassengerInfoStep } from '../components/OrderForms/AltSteps';
import { useAppDispatch } from '../store/store';
import { createTransfer } from '../store/slices/userSlice';

interface OrderPageProps {
}

const button : SxProps = {
  width: '343px',
  height: '40px',
  background: '#007AFF',
  borderRadius: '8px',
  color: 'white',
  fontSize: '15px',
  textTransform: 'none',
  "&:hover" : {
    backgroundColor: '#007AFF',
  }
}

const buttonBack : SxProps = {
  width: '343px',
  height: '40px',
  background: "#F2F2F2",
  border: "1px solid #007AFF",
  borderRadius: "8px",
  fontStyle: "normal",
  fontWeight: '400',
  fontSize: '15px',
  lineHeight: '18px',
  textTransform: 'none',
  marginBottom: '20px',
  
}

const OrderPage: React.FC<OrderPageProps> = () => {
    const steps = [
        {
            label: 'Заказать трансфер',
            description: <AltOrderStep/>
        },
        {
            label: 'Заказать трансфер',
            description: <AltPassengerInfoStep/>
        },
        {
            label: 'Заказать трансфер',
            description: <ConfirmationStep/>
        },
        {
            label: 'Заказать трансфер',
            description: <CompleteStep/>
        }
    ]

  const dispatch = useAppDispatch()

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const navigate = useNavigate()

  const methods = useForm<any>();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep !== steps.length - 1 ? prevActiveStep + 1 : prevActiveStep);
    sentPost()
  };
  const [data, setData] = React.useState({})
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const sentPost = () => {
    if(activeStep == 2) {
      dispatch(createTransfer(data))
    }
  }

    return ( 
        <form className="order-page" onSubmit={methods.handleSubmit(d => setData(d))}>
          <FormProvider {...methods}>
            <h1 className='order-title'>Заказать трансфер</h1>
            <div>
                {steps[activeStep].description}
            </div>
                <Stepper activeStep={activeStep} connector={null}>
                  {steps.map((_, index) => <Step 
                   key={index}/>
                  )}
                </Stepper>
                {activeStep > 0 && activeStep < maxSteps - 1
                ? <div style={{display: 'flex', gap: "15px"}}>
                <Button sx={buttonBack} onClick={handleBack}>Назад</Button>
                <Button sx={button} type='submit' onClick={handleNext}>Далее</Button>
              </div>
                : 
                activeStep == 3 ? <></>: <Button sx={button} type='submit' onClick={handleNext}>Далее</Button>}
          </FormProvider>
        </form>
     );
}
 
export default OrderPage;