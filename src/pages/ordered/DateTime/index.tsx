import { Button, Checkbox, Input, Radio, RadioGroup } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CheckboxActive, CheckboxChecked } from "../../../components/CheckboxStatus";
import { sedanIcon, vitoIcon } from "../../../components/images";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { button, backButton, input, defaultButton } from "../../../styles/styles";
import { fromAirport, setCarType } from '../../../store/slices/userSlice';


interface DateTimeProps {
    
}
 
const DateTime: React.FunctionComponent<DateTimeProps> = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { isAirport, carType } = useAppSelector((state) => state.user);
    const { register, handleSubmit } = useForm()

    return ( 
        <form className="transfers-page" onSubmit={handleSubmit((d) => console.log(d))}>
            <div>
                <h1 className="order-title">Заказанные поездки</h1>
                <p>Изменить данные возможно не менее чем за 28 часов</p>
                <hr />
                <div style={{ display: 'flex', gap: '15px' }}>
                    <div>
                    <div className="label">Дата поездки</div>
                    <Input type="date" sx={{ ...input, width: '164px' }} {...register('transferDate')} />
                    </div>
                    <div>
                    <div className="label">Время поездки</div>
                    <Input type="time" sx={{ ...input, width: '164px' }} {...register('transferTime')} />
                    </div>
                </div>
                <div className="pick">
                    <Checkbox
                    onClick={(e: any) => dispatch(fromAirport(e.target.checked))}
                    defaultChecked={isAirport}
                    {...register('pickYouUpFromAirPort')}
                    />
                    <div>Вас забрать из аэропорта?</div>
                </div>
                <div>
                    <div className="step">
                    <div>Откуда тебя забрать?</div>
                    <Button sx={button}>Выбрать на карте</Button>
                    </div>
                    <Input sx={input} type="text" {...register('start')} />
                </div>
                <div>
                    <div className="step">
                    <div>Куда тебя привести?</div>
                    <Button sx={button}>Выбрать на карте</Button>
                    </div>
                    <Input sx={input} type="text" {...register('end')} />
                </div>
                <RadioGroup defaultValue={carType}>
                    <div className="label">Тип автомобиля</div>
                    <div className="type-block">
                    <Radio
                        sx={{ padding: 0, margin: 0 }}
                        onClick={(e: any) => dispatch(setCarType(e.target.value))}
                        value={'Vito'}
                        icon={<CheckboxActive icon={vitoIcon} title="Vito" info="До 8 человек" />}
                        checkedIcon={<CheckboxChecked icon={vitoIcon} title="Vito" info="До 8 человек" />}
                        {...register('carType')}
                    />
                    <Radio
                        sx={{ padding: 0, margin: 0 }}
                        onClick={(e: any) => dispatch(setCarType(e.target.value))}
                        value={'Sedan'}
                        icon={<CheckboxActive icon={sedanIcon} title="Sedan" info="До 4 человек" />}
                        checkedIcon={<CheckboxChecked icon={sedanIcon} title="Sedan" info="До 4 человек" />}
                        {...register('carType')}
                    />
                    </div>
                </RadioGroup>
            </div>
            <div>
                <Button type="submit" sx={{...defaultButton, marginBottom: '15px'}}>Сохранить изменения</Button>
                <Button sx={backButton} onClick={() => navigate(-1)}>Назад</Button>
            </div>
        </form>
     );
}
 
export default DateTime;