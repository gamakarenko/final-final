import { useState } from "react";

interface FAQTabProps {
    question: string,
    answer: string,
}
 
export const FAQTab: React.FunctionComponent<FAQTabProps> = ({question, answer}) => {
    const [active, setActive] = useState<boolean>(false)
    return ( 
        <div className="faq-item" onClick={() => setActive(prev => !prev)}>
            <div className={active ? "faq-item__title select" : "faq-item__title"}>{question}</div>
            <div className={active ? "faq-item__answer" : "faq-item__answer close"}>{answer}</div>
        </div>
     );
}