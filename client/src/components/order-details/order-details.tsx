import styles from "./order-details.module.css"
import done_icon from "../../images/done_icon.svg"
import { useSelector } from "../../services/types/hooks";

export default function OrderDetails() {

  const zeroLength = 6;
  const orderInfo = useSelector((store) => store.orderInformation.orderNumber);
  const orderNumber = String(orderInfo).padStart(zeroLength, '0');

  return ( 
    <div className={styles.order_details}>
      {orderInfo
      ?  <p className='text text_type_digits-large mt-15'>{orderNumber}</p>
      :  <p className='text text_type_main-medium'>Wait...</p>
      }
      <h3 className='text text_type_main-medium mt-8 mb-2'>order identification</h3>
      <img src={done_icon} alt="Заказ оформлен" className='mt-15 mb-1' />
      <p className='text text_type_main-default mt-15'>Your order has started to be prepared</p>
      <p className='text text_type_main-default text_color_inactive mt-2 pb-15'>Wait for readiness at the orbital station</p>
    </div>
   );
}