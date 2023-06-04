import React from 'react';
import OrderElement from './order-element/order-element';
import styles from './orders.module.css'

export default function Orders({ path, ordersData, reverse, statusOn }) {
  return (
    <ul className={`${styles.blockWithScroll} mt-10`}>
      {reverse
        ? ordersData.orders?.map(item => <OrderElement statusOn={statusOn} size data={item} path={path} key={item._id} />).reverse()
        : ordersData.orders?.map(item => <OrderElement statusOn={statusOn} data={item} path={path} key={item._id} />)
      }
    </ul>
  );
}