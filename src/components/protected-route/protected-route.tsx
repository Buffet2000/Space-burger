import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../services/cookie";

export const ProtectedRoute: FC = ({ children, anonymous = false }) => {
  const isLoggedIn = getCookie("accessToken");
  const location = useLocation();

  const from = location.state?.from.pathname || "/";
  // Если разрешен неавторизованный доступ, а пользователь авторизован...
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  // Если требуется авторизация, а пользователь не авторизован...
  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  // Если все ок, то рендерим внутреннее содержимое
  return children;
}