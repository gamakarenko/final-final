import { useNavigate } from "react-router-dom";
import MainButton from "../components/MainButton.tsx";
import { AboutIcon, FAQIcon, OrderIcon, SearchIcon, ShareIcon, TransfersIcon } from "../components/svg";

interface MainPageProps {
    
}
 
export const MainPage: React.FC<MainPageProps> = () => {
    const navigate = useNavigate()
    //@ts-ignore
    let tg = window?.Telegram?.WebApp;
    let user = tg?.initDataUnsafe?.user
    console.log("Сам объект",tg.initData)
    console.log("user",tg.initDataUnsafe )

    return ( 
        <div className="main-page">
            {/* <span>Тестирование получения данных</span>
            <span>{"Username" +" "+ user?.username}</span>
            <span>{"Имя" + " " + user?.first_name}</span>
            <span>{"ID" + " " + user?.id}</span>
            <span>{"Фамилия"+" "+user?.last_name}</span>
            <span>{"Язык"+ " " +user?.language_code}</span> */}
            <MainButton title="Заказать трансфер" icon={<OrderIcon/>} onClick={() => navigate("/order")}/>
            <MainButton disabled={true} title="Пошерить трансфер" icon={<ShareIcon/>} onClick={() => navigate("/share")}/>
            <MainButton disabled title="Найти попутчиков к своей поездке" icon={<SearchIcon/>}/>
            <MainButton title="Мои поездки" icon={<TransfersIcon/>}/>
            <MainButton disabled title="О проекте" icon={<AboutIcon/>}/>
            <MainButton title="FAQ" icon={<FAQIcon/>} onClick={() => navigate("/faq")}/>
        </div>
     );
}
