import React from "react";
import AppHeader from "../app-header/app-header";
import { getIngredientsData } from "../../services/actions/all-ingredients";
import HomePage from "../../pages/home-page/home-page";
import Profile from '../../pages/profile/profile';
import Login from '../../pages/login/login';
import Register from '../../pages/register/register';
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from '../../pages/reset-password/reset-password'
import IngredientDetailsPage from "../../pages/ingredient-details-page/ingredient-details-page";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { WS_AUTH_CONNECTION_CLOSED, WS_AUTH_CONNECTION_START } from "../../services/constants/web-socket-auth";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from '../../services/constants/web-socket';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from "../protected-route/protected-route";
import { getUserData } from "../../services/actions/login";
import Modal from "../modal/modal";
import ProfileOrders from "../../pages/profile-orders/profile-orders";
import ProfileInfo from "../profile-info/profile-info";
import Order from "../../pages/order/order";
import Feed from "../../pages/feed/feed";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const itemsLoaded = useSelector((store) => store.ingredients.items);
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wsOrdersData = useSelector((store) => store.wsOrders.orders);
  const wsAuthOrdersData = useSelector((store) => store.wsAuthOrders.orders);

  React.useEffect(() => {
    dispatch(getIngredientsData());
    dispatch(getUserData()); 
  }, [dispatch])

  function closePopup() {
    navigate(-1)
  };
  return (
    <>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<ProtectedRoute anonymous> <Login /> </ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute ><Profile /></ProtectedRoute>}>
          <Route path="" element={<ProfileInfo />} />
          <Route path="orders" element={<ProfileOrders reverse path={'/profile/orders'} />} />
        </Route>
        <Route path="/profile/orders/:id" element={<ProtectedRoute><Order start={WS_AUTH_CONNECTION_START} close={WS_AUTH_CONNECTION_CLOSED} data={wsAuthOrdersData} /></ProtectedRoute>} />
        <Route path="/feed" element={<Feed path={'/feed'} />} />
        <Route path="/feed/:id" element={<Order start={WS_CONNECTION_START} close={WS_CONNECTION_CLOSED} data={wsOrdersData} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ProtectedRoute anonymous><ResetPassword /></ProtectedRoute>} />
        <Route path="/forgot-password" element={<ProtectedRoute anonymous><ForgotPassword /></ProtectedRoute>} />
        <Route path="/ingredients/:id" element={<IngredientDetailsPage />} />
      </Routes>

      {background && itemsLoaded && <Routes> <Route path="/ingredients/:id" element={<Modal title={"Детали ингредиента"} handleClose={closePopup}><IngredientDetails data={itemsLoaded} /></Modal>} /> </Routes>}
      {background && wsOrdersData && <Routes> <Route path="/feed/:id" element={<Modal title={``} handleClose={closePopup}><Order modal data={wsOrdersData} /></Modal>} /> </Routes>}
      {background && wsAuthOrdersData && <Routes> <Route path="/profile/orders/:id" element={<Modal handleClose={closePopup}><Order modal data={wsAuthOrdersData} /></Modal>} /> </Routes>}
    </>
  );
}