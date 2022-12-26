import { Button, SxProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface CompleteStepProps {
    
}

const button : SxProps = {
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

const buttonComplete : SxProps = {
    width: '343px',
    height: '40px',
    background: '#007AFF',
    borderRadius: '8px',
    color: 'white',
    fontSize: '15px',
    textTransform: 'none',
  }
  
 
export const CompleteStep: React.FC<CompleteStepProps> = () => {
    const navigate = useNavigate()
    return ( 
        <>
            <p className="order__description">
                Спасибо! Ваша заявка на трансфер принята.<br/>
                Ассистент свяжется с вами в течение за 24 ч. <br/>
                до отправления для подтверждения <br/>
                бронирования.
                <br/>
                <br/>
                Мы напомним тебе о поездке за 12 часов до <br/>
                отправления :)
                <br/>
                <br/>
                Теперь твоя бронь доступна в разделе: Мои <br/>
                поездки. Там же ты сможешь её отменить <br/>
                или изменить данные.
            </p>
            <br/>
            <Button sx={button} onClick={() => navigate("/transfers")}>Мои поездки</Button>
            <Button sx={buttonComplete} type='submit' onClick={() => navigate("/")}>Завершить</Button>
        </>
     );
}