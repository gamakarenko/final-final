import { useNavigate } from "react-router-dom";
import { FAQTab } from "../components/FAQtab";
import { FAQ } from "../utils/FAQ";

interface FAQPageProps {
    
}
 
const FAQPage: React.FunctionComponent<FAQPageProps> = () => {
    const navigate = useNavigate()
    return ( 
        <>
        <div className="faq-title" onClick={() => navigate('/')}>FAQ</div>
        <div style={{display: 'flex', flexDirection: "column", paddingLeft: "16px", paddingRight: "16px"}}>
        {FAQ.map((e) => <FAQTab key={e.question} {...e}/>)}
        </div>
        </>
     );
}
 
export default FAQPage;