interface MainButtonProps {
    title: string,
    icon: React.ReactNode,
    onClick?: () => void,
    props?: any,
    disabled?: boolean,
}
 
const MainButton: React.FC<MainButtonProps> = ({icon, title, onClick, disabled}) => {
    return ( 
        <button className="button" disabled={disabled} onClick={onClick} >
            <div className="button-square">
                {icon}
            </div>
            <span className="button-title">{title}</span>
        </button>
     );
}
 
export default MainButton;