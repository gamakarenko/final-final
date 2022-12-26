interface PassengerBlockProps {
    title: string,
    description: string,
}
 
const PassengerBlock: React.FC<PassengerBlockProps> = ({title, description}) => {
    return ( 
        <div className="passenger-block">
            <h3 className="passenger-block__title">{title}</h3>
            <p className="passenger-block__description">{description}</p>
        </div>
     );
}
 
export default PassengerBlock;