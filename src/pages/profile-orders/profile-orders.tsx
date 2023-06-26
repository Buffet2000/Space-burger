import { useEffect } from 'react';
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSED } from '../../services/constants/web-socket-auth';
import { useDispatch, useSelector } from '../../services/types/hooks';
import Orders from '../../components/orders/orders';
import styles from './profile-orders.module.css';

type ProfileOrders = {
  path: string,
  reverse?: boolean
}

export default function ProfileOrders({ path, reverse }: ProfileOrders) {
  const dispatch = useDispatch();
  const wsAuthData = useSelector((store) => store.wsAuthOrders.orders);

  useEffect(() => {
    dispatch({ type: WS_AUTH_CONNECTION_START });
    return () => { dispatch({ type: WS_AUTH_CONNECTION_CLOSED }) };
  }, [dispatch]);

  return (
    <>
      <div className={styles.orders}>
        {!wsAuthData
          ? <p>Загрузка...</p>
          : <Orders ordersData={wsAuthData} path={path} reverse={reverse} />}
      </div>
    </>

  );
}