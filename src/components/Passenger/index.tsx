import { useFormContext } from "react-hook-form";
import PassengerBlock from "./PassangerBlock";

export interface PassengersProps {

}

 
export const Passenger: React.FunctionComponent<PassengersProps> = () => {
    const context = useFormContext()
    const {order} = context.getValues()
    const {passengers} = order
    console.log(passengers)
    return ( 
        <div>
            <br/>
            <div style={{display: "flex", justifyContent: 'space-between', }}>
                <PassengerBlock title="Дата поездки" description={order?.transferDate}/>
                <PassengerBlock title="Время поездки" description={order?.transferTime}/>
            </div>
            <PassengerBlock title="Откуда тебя забрать?" description={order?.start}/>
            <PassengerBlock title="Куда привести?" description={order?.end}/>
            <PassengerBlock title="Тип автомобиля" description={order?.carType}/>
            <br/>
            {passengers && passengers.map((i: any, index: any) => {
               return <div key={index}>
                    <hr/>
                    <br/>
                    <h3 className="passss">{`Пассажир ${index + 1}`}</h3>
                    <PassengerBlock title="ФИО" description={i?.fullName ? i?.fullName : '-' }/>
                    <PassengerBlock title="Номер загранпаспорта" description={i?.passportId ? i?.passportId : '-'}/>
                    <PassengerBlock title="Дата и время прилёта" description={i?.departureDate && i?.departureTime ? i?.departureDate + " " + i?.departureTime : "-"}/>
                    <PassengerBlock title="Номер рейса" description={'-'}/>
                    <PassengerBlock title="Номер телефона" description={i?.phoneNumber ? i?.phoneNumber : '-'}/>
                    <PassengerBlock title="Электронная почта" description="-"/>
                    <PassengerBlock title="Логин в телеграмме" description={i?.telegramId ? i?.telegramId : '-'}/>
                    <PassengerBlock title="Комментарий к поездке" description={i?.transferComment ? i?.transferComment : "-"}/>
                </div>
            })}
        </div>
     );
}