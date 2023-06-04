import React, { useEffect } from 'react';
import { WS_AUTH_CONNECTION_START, WS_AUTH_CONNECTION_CLOSED } from '../../services/actions/web-socket-auth';
import { useDispatch, useSelector } from 'react-redux';
import Orders from '../../components/orders/orders';
import PropTypes from 'prop-types';

export default function ProfileOrders({ path }) {
  const dispatch = useDispatch();
  const wsAuthData = useSelector((store) => store.wsAuthOrders);
  console.log(wsAuthData)

  useEffect(() => {
    dispatch({ type: WS_AUTH_CONNECTION_START });
    return () => dispatch({ type: WS_AUTH_CONNECTION_CLOSED });
  }, [dispatch]);

  return (
    <Orders ordersData={wsAuthData} path={path} />
  );
}

ProfileOrders.propTypes = {
  path: PropTypes.string,
}