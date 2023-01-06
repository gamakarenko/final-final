import { Input, SxProps } from "@mui/material";
import { useFormContext } from 'react-hook-form';


interface AgeStepProps {
    
}

const input: SxProps = {
    width: '100%',
    minHeight: '45px',
    background: '#E9E9E9',
    border: '1px solid #ADADAD',
    borderRadius: '5px',
    outline: 'none',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    '&:before': {
      borderBottom: 'none',
    },
  };

const AgeStep: React.FunctionComponent<AgeStepProps> = () => {
    const { register } = useFormContext();
    return ( 
        <>
            <div className="label">Количество взрослых</div>
            <Input type="number" sx={{...input, width: '164px'}} {...register('order.adults')} />
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                <div>
                <div className="label">
                    Количество детей
                    <br />
                    (0-5 лет)
                </div>
                <Input type="number" sx={input} {...register('order.childrenUnder5')} />
                </div>
                <div>
                <div className="label">
                    Количество детей
                    <br />
                    (6-12 лет)
                </div>
                <Input type="number" sx={input} {...register('order.childrenAbove5')} />
                </div>
            </div>
        </>
     );
}
 
export default AgeStep;