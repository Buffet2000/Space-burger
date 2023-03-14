import styles from "./order-details.module.css"
import done_icon from "../../images/done_icon.svg"

export default function OrderDetails() {
  return ( 
    <div className={styles.order_details}>
      <p className='text text_type_digits-large mt-15'>034536</p>
      <h3 className='text text_type_main-medium mt-8 mb-2'>идентификатор заказа</h3>
      <img src={done_icon} className='mt-15 mb-1' type="primary" />
      <p className='text text_type_main-default mt-15'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive mt-2 pb-15'>Дождитесь готовности на орбитальной станции</p>
    </div>
   );
}