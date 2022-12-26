import { Form } from "../../Form";

interface PassengerInfoStepProps {
    
}
 
export const PassengerInfoStep: React.FunctionComponent<PassengerInfoStepProps> = () => {
    return ( 
        <>
            <p className="order__description">
            Отлично! Мы почти у цели:) Для оформления <br/>
            трансфера нам потребуются некоторые <br/>
            данные о тебе. Пожалуйста, заполни форму <br/>
            на каждого пассажира.
            </p>
            <br />
            <hr/>
            <div className="fullname">ФИО</div>
            <Form.Input name="passenger.fullName"/>
            <div className="label">Номер загранпаспорта</div>
            <Form.Input name="passenger.passportID"/>
            <div style={{display: "flex", gap: '15px'}}>
                <div>
                <div className="label">Дата вылета</div>
                <Form.Input type='data' sx={{width: '164px'}} name="passenger.departureDate"/>
                </div>
                <div>
                <div className="label">Время вылета</div>
                <Form.Input sx={{width: '164px'}} name="passenger.departureTime"/>
                </div>
            </div>
            <div className="label">Номер телефона</div>
            <Form.Input name="passenger.phoneNumber"/>
            <div className="label">Логин в телеграмме</div>
            <Form.Input name="passenger.telegramId"/>
            <div className="label">Комментарий к поездке</div>
            <Form.Input multiline={true} minRows={3} name="passenger.transferComment"/>
            <p className="help">При возникновении вопросов на этапе бронирования, пожалуйста, обратитесь к ассистенту @...</p>

            
        </>
     );
}