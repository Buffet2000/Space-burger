import { useEffect } from 'react';
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSED } from '../../services/constants/web-socket-auth';
import { useDispatch, useSelector } from '../../services/types/hooks';
import Orders from '../../components/orders/orders';
import styles from './profile-orders.module.css';

export default function ProfileOrders({ path, reverse }) {
  const dispatch = useDispatch();
  const wsAuthData = useSelector((store) => store.wsAuthOrders);
  console.log(wsAuthData)

  useEffect(() => {
    dispatch({ type: WS_AUTH_CONNECTION_START });
    return () => dispatch({ type: WS_AUTH_CONNECTION_CLOSED });
  }, [dispatch]);

  return (
    <div className={styles.orders}>
      <Orders statusOn={true} ordersData={wsAuthData} path={path} reverse={reverse} />
    </div>
  );
}