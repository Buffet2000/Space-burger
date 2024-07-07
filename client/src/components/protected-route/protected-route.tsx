import { Navigate, useLocation } from "react-router-dom";
import { getCookie } from "../../services/cookie";

type ProtectedRouteProps = {
  children: JSX.Element,
  anonymous?: boolean
}

export default function ProtectedRoute({ children, anonymous = false }: ProtectedRouteProps) {
  const isLoggedIn = getCookie("accessToken");
  const location = useLocation();

  const from = location.state?.from.pathname || "/";

  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }

  if (!anonymous && !isLoggedIn) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}