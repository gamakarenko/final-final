import { Node } from "typescript";

interface CheckboxActiveProps {
    icon: any,
    title: string,
    info: string,
    
}
 
export const CheckboxActive: React.FunctionComponent<CheckboxActiveProps> = ( {icon, title, info} ) => {
    return ( 
        <div className="type">
                    <img className="type__icon" src={icon} alt="" />
                    <div className="type__description">
                        <div className="type__description-title">{title}</div>
                        <div className="type__description-main">{info}</div>
                    </div>
                </div>
     );
}

export const CheckboxChecked: React.FunctionComponent<CheckboxActiveProps> = ( {icon, title, info} ) => {
    return ( 
        <div className="type" style={{background: "#007AFF"}}>
                    <img className="type__icon" src={icon} alt="" />
                    <div className="type__description">
                        <div className="type__description-title">{title}</div>
                        <div className="type__description-main">{info}</div>
                    </div>
                </div>
     );
}
