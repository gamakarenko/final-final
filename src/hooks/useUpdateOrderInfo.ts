import { editOrderInfo } from "store/newOrder/newOrder";
import { useAppDispatch } from "store/store";
import { IOrder } from "types/order";



export default function useUpdateOrderInfo(){

    const dispatcher = useAppDispatch();
    
    const updateOrderInfo = (key: keyof IOrder, value: string | number) => {
        dispatcher(editOrderInfo({[key]: value}))
    }

    return{
        updateOrderInfo
    }
}