import PassengerBlock from "../../components/Passenger/PassangerBlock";
import { useAppSelector } from "../../store/store";

interface CancelChangePageProps {
    
}
 
const CancelChangePage: React.FunctionComponent<CancelChangePageProps> = () => {
    
    const {transfers} = useAppSelector(state => state.transfers)
    return ( 
        <>
        <div className="transfer-page">
            Отменить 
        </div>
        <div>
        <br/>
        <div style={{display: "flex", justifyContent: 'space-between', }}>
            <PassengerBlock title="Дата поездки" description={transfers?.transferDate}/>
            <PassengerBlock title="Время поездки" description={transfers?.transferTime}/>
        </div>
        <PassengerBlock title="Откуда тебя забрать?" description={transfers?.start}/>
        <PassengerBlock title="Куда привести?" description={transfers?.end}/>
        <PassengerBlock title="Тип автомобиля" description={transfers?.carType}/>
        <br/>
        {transfers?.passengers && transfers?.passengers.map((i: any, index: any) => {
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
    </>
     );
}
 
export default CancelChangePage;