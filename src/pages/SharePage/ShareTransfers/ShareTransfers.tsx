import Way from "components/Way/Way"
import { useAppSelector } from "store/store";


export default function ShareTransfers(){
    const { order } = useAppSelector(({ newOrder }) => newOrder);

    return(
        <div className="share-transfers">
            <Way date={order.transferDate} startLocation={order.startLocation} endLocation={order.endLocation} />
        </div>
    )
}