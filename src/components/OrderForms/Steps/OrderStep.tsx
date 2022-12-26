import { Button, FormGroup, Input, SxProps } from "@mui/material";
import { Form } from "../../Form";
import { sedanIcon, vitoIcon } from "../../images";

interface OrderStepProps {
    
}
 
const button : SxProps = {
    width: "143px",
    height: '30px',
    border: "1px solid #007AFF",
    borderRadius: "5px",
    fontWeight: '400',
    fontSize: '10px',
    lineHeight: '12px',
}

export const OrderStep: React.FC<OrderStepProps> = () => {
    return ( 
        <>
            <p className="order__description">
            Здесь ты можешь заказ трансфер :)<br/>
            Водитель встретит тебя в указанном месте и<br/>
            отвезёт туда, куда необходимо.<br/>
            <br/>
            Забронировать, а также отменить трансфер <br/>
            можно не позднее, чем за 28 часов до <br/>
            поездки. Только так мы можем быть уверены, <br/>
            что машина и водитель будут свободны для <br/>
            вас :)
            </p>
            <br/>
            <hr/>
            <div style={{display: "flex", gap: '15px'}}>

                <div>
                    <div className="label">Дата поездки</div>
                    <Input type="date"/>
                    <Form.Input sx={{width: '164px'}} name="order.transferDate"/>
                </div>
                <div>
                    <div className="label">Время поездки</div>
                    <Input type="date"/>
                    <Form.Input sx={{width: '164px'}} name="order.transferTime"/>
                </div>
            </div>
            <div>
                <div className="step">
                    <div>Откуда тебя забрать?</div>
                    <Button sx={button}>Выбрать на карте</Button>
                </div>
                <Form.Input  name="order.start"/>
            </div>
            <div>
                <div className="step">
                    <div>Куда тебя привести?</div>
                    <Button sx={button}>Выбрать на карте</Button>
                </div>
                <Form.Input  name="order.end"/>
            </div>
            <Form.Checkbox label='Вас забрать из аэропорта?' name="order.pickYouUpFromAirPort"/>
            <FormGroup>
                <div className="type-block">
                <div className="type">
                    <img className="type__icon" src={vitoIcon} alt="" />
                    <div className="type__description">
                        <div className="type__description-title">Vito</div>
                        <div className="type__description-main">До 8 человек</div>
                    </div>
                </div>
                <div className="type">
                    <img className="type__icon" src={sedanIcon} alt="" />
                    <div className="type__description">
                        <div className="type__description-title">Sedan</div>
                        <div className="type__description-main">До 4 человек</div>
                    </div>
                </div>
                </div>
            </FormGroup>
            <div className="label">Количество взрослых</div>
            <Form.Input name="order.adults"/>
            <div style={{display: "flex", gap: '15px', marginBottom: '15px'}}>
                <div>
                    <div className="label">Количество детей<br/>(0-5 лет)</div>
                    <Form.Input name="order.childrenUnder5"/>
                </div>
                <div>
                    <div className="label">Количество детей<br/>
                    (6-12 лет)</div>
                    <Form.Input name="order.childrenAbove5"/>
                </div>
            </div>
        </>
     );
}