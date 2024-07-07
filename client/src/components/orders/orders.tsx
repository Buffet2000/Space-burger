import { Order } from '../../services/types/types';
import OrderElement from './order-element/order-element';
import styles from './orders.module.css';

type OrdersProps = {
  path: string,
  ordersData: Order[],
  reverse?: boolean,
}

export default function Orders({ path, ordersData, reverse }: OrdersProps) {
  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      {reverse
        ? ordersData?.map(item => <OrderElement data={item} path={path} key={item._id} />).reverse()
        : ordersData?.map(item => <OrderElement data={item} path={path} key={item._id} />)
      }
    </ul>
  );
}