import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from '../../services/cookie';
import { useSelector } from 'react-redux';

export default function ProtectedRoute({ element, anonymous = false }) {
  const isLoggedIn = getCookie("accessToken");
  const location = useLocation();
	const { isAuthenticated } = useSelector((store) => store.user);

  const from = location.state?.from.pathname || '/';
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
		console.log(isAuthenticated)
    return <Navigate to={from} />;
  }
  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    console.log(isAuthenticated)
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  // Если все ок, то рендерим внутреннее содержимое
  return element;
}
