import { Button, Checkbox, FormGroup, Input, Radio, RadioGroup, SxProps } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { CheckboxActive, CheckboxChecked } from "../../CheckboxStatus";
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

const input : SxProps = {
    width: "100%",
    minHeight: "45px",
    background: '#E9E9E9',
    border: '1px solid #ADADAD',
    borderRadius: '5px',
    outline: 'none',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    "&:before": {
      borderBottom: 'none'
    }
}

export const AltOrderStep: React.FC<OrderStepProps> = () => {
    const { register } = useFormContext()
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
                    <Input type="date" sx={{...input, width: '164px'}} {...register("order.transferDate")} />
                </div>
                <div>
                    <div className="label">Время поездки</div>
                    <Input type="time" sx={{...input, width: '164px'}} {...register("order.transferTime")} />
                </div>
            </div>
            <div>
                <div className="step">
                    <div>Откуда тебя забрать?</div>
                    <Button sx={button}>Выбрать на карте</Button>
                </div>
                <Input sx={input} type="text" {...register("order.start")} />
            </div>
            <div>
                <div className="step">
                    <div>Куда тебя привести?</div>
                    <Button sx={button}>Выбрать на карте</Button>
                </div>
                <Input sx={input} type="text" {...register("order.end")} />
            </div>
            <div className="pick">
                <Checkbox {...register("order.pickYouUpFromAirPort")} />
                <div>Вас забрать из аэропорта?</div>
            </div>
            <RadioGroup>
                <div className="type-block">
                    <Radio sx={{padding: 0, margin: 0}} value={'Vito'} icon={<CheckboxActive icon={vitoIcon} title='Vito' info="До 8 человек"/>} checkedIcon={<CheckboxChecked icon={vitoIcon} title='Vito' info="До 8 человек"/>} {...register("order.carType")} />
                    <Radio sx={{padding: 0, margin: 0}} value={'Sedan'} icon={<CheckboxActive icon={sedanIcon} title='Sedan' info="До 4 человек"/>} checkedIcon={<CheckboxChecked icon={sedanIcon} title='Sedan' info="До 4 человек"/>} {...register("order.carType")}/>
                </div>
            </RadioGroup>
            <div className="label">Количество взрослых</div>
            <Input sx={input} {...register("order.adults")}/>
            <div style={{display: "flex", gap: '15px', marginBottom: '15px'}}>
                <div>
                    <div className="label">Количество детей<br/>(0-5 лет)</div>
                    <Input sx={input} {...register("order.childrenUnder5")}/>
                </div>
                <div>
                    <div className="label">Количество детей<br/>
                    (6-12 лет)</div>
                    <Input sx={input} {...register("order.childrenAbove5")} />
                </div>
            </div>
        </>
     );
}