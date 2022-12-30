import { Button, SxProps } from "@mui/material";

const mainButton : SxProps = {
    width: "100%",
    height: "80px",
    color: "white",
    backgroundColor: "#007AFF",
    borderRadius: '10px',
    border: 'none',
    fontWeight: '510',
    fontSize: "15px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    textTransform: 'none',
    "&:hover": {
        backgroundColor: "#007AFF",
    },
}

interface MainButtonProps {
    title: string,
    icon: React.ReactNode,
    onClick?: () => void,
    props?: any,
    disabled?: boolean,
}
 
const MainButton: React.FC<MainButtonProps> = ({icon, title, onClick, disabled}) => {
    return ( 
        <Button sx={mainButton} className="button" disabled={disabled} onClick={onClick} >
            <div className="button-square">
                {icon}
            </div>
            <span className="button-title">{title}</span>
        </Button>
     );
}
 
export default MainButton;