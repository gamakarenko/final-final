interface OrderedPageProps {
    
}
 
export const OrderedPage: React.FunctionComponent<OrderedPageProps> = () => {
    //@ts-ignore
    let tg = window?.Telegram?.WebApp;
    const back = tg.BackButton
    back.show()
    return ( 
        <div className="transfers-page">
            <div className="transfers-page__title-s">Заказанные поездки</div>
            <p>Чтобы изменить личную информацию, дату, <br/>
            время поездки и другие данные - нажмите на <br/>
            интересующую поездку</p>
            <br/>
            <hr/>
            <br/>
            <div className="order-block-wrap">
                <div className="order-block-title">Забронированная поездка #11</div>

                <div className="order-block">
                    <div>Откуда:</div>
                    <div>Анталия (город)</div>
                </div>

                <div className="order-block">
                    <div>Куда:</div>
                    <div>Даламан (город)</div>
                </div>
                
                <div className="order-block">
                    <div>Дата:</div>
                    <div>3 мая</div>
                </div>

                <div className="order-block">
                    <div>Время:</div>
                    <div>18:00</div>
                </div>

            </div>
        </div>
     );
}