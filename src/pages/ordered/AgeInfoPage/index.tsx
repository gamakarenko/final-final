import { Button, Input, Step, Stepper, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from 'react-hook-form';
import { useState } from "react";
import AgeStep from "./steps/AgeStep";
import InfoStep from "./steps/InfoStep";


interface AgeInfoProps {
    
}

const button: SxProps = {
    width: '343px',
    height: '40px',
    background: '#007AFF',
    borderRadius: '8px',
    color: 'white',
    fontSize: '15px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: '#007AFF',
    },
  };
  
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

  const steps = [
    {
      label: 'Заказать трансфер',
      description: <AgeStep />,
    },
    {
      label: 'Заказать трансфер',
      description: <InfoStep />,
    },
  ];

const AgeInfo: React.FunctionComponent<AgeInfoProps> = () => {
    const navigate = useNavigate()
    const methods = useForm<any>();
    const [activeStep, setActiveStep] = useState(0)
    return ( 
        <div className="order-page" style={{height: '100vh', flexDirection: 'column', display: 'flex', justifyContent: 'space-between'}}>
            <div>
            <h1 className="order-title">Заказанные поездки</h1>
            <p className="order__description">Внимание! Изменение количества <br/>пассажиров может повлиять на стоимость поездки.</p>
            <br />
            <hr />
            <form>
                <FormProvider {...methods}>
                <Stepper activeStep={activeStep} connector={null}>
                    {steps.map((_, i) => (<Step key={i}/>))}
                </Stepper>
                <>{steps[activeStep].description}</>
                </FormProvider>
            </form>
            </div>
            <Button onClick={() => setActiveStep((prev) => prev + 1)} sx={button}>Далее</Button>
        </div>
     );
}
 
export default AgeInfo;