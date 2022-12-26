import { Passenger } from "../../Passenger";


interface ConfirmationStepProps {
    
}
 
export const ConfirmationStep: React.FC<ConfirmationStepProps> = () => {
    return ( 
        <>
            <p className="order__description">
                Подтверждение введённой информации
            </p>
            <br />
            <hr/>
            <Passenger/>
        </>
     );
}