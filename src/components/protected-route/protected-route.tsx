import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../services/cookie";

type ProtectedRoute = {
  children: JSX.Element,
  anonymous?: boolean
}

export default function ProtectedRoute({ children, anonymous = false }: ProtectedRoute) {
  const isLoggedIn = getCookie("accessToken");
  const location = useLocation();

  const from = location.state?.from.pathname || "/";
  // Если разрешен неавторизованный доступ и пользователь авторизован:
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  // Если требуется авторизация и пользователь не авторизован:
  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }
  // Если все ок, то рендерим внутреннее содержимое
  return children;
}