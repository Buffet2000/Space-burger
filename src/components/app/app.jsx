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
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ProtectedRoute from "../protected-route/protected-route";
import { getUserData } from "../../services/actions/login";
import Modal from "../modal/modal";
import ProfileOrders from "../profile-orders/profile-orders";

export default function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  const itemsLoaded = useSelector((store) => store.ingredients.items);
  const userData = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} >
          <Route path="orders" element={<ProfileOrders reverse path={'/profile/orders'} />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ProtectedRoute anonymous><ResetPassword /></ProtectedRoute>} />
        <Route path="/forgot-password" element={<ProtectedRoute anonymous><ForgotPassword /></ProtectedRoute>} />
        <Route path="/ingredients/:id" element={<IngredientDetailsPage />} />
      </Routes>

      {background && itemsLoaded && <Routes> <Route path="/ingredients/:id" element={<Modal title={"Детали ингредиента"} handleClose={closePopup}><IngredientDetails data={itemsLoaded} /></Modal>} /> </Routes>}
    </>
  );
}